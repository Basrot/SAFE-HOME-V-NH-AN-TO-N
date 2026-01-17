
import React, { useState, useEffect } from 'react';
import UserApp from './components/UserApp';
import PartnerApp from './components/PartnerApp';
import { Booking, TripStatus, UserProfile, Transaction } from './types';

const App: React.FC = () => {
  const [appMode, setAppMode] = useState<'user' | 'partner' | null>(null);
  const [activeBooking, setActiveBooking] = useState<Booking | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('safehome_dark') === 'true');
  
  const [partnerAuth, setPartnerAuth] = useState({ user: '', pass: '' });
  const [isPartnerLoggedIn, setIsPartnerLoggedIn] = useState(false);
  const [partnerError, setPartnerError] = useState('');

  const [userProfile] = useState<UserProfile>({
    name: 'Sinh viên UTT',
    phone: '0912345678',
    avatar: 'https://i.pravatar.cc/150?u=utt_student',
    points: 450
  });

  const [userHistory, setUserHistory] = useState<Booking[]>(() => {
    const saved = localStorage.getItem('safehome_history');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [partnerBalance, setPartnerBalance] = useState(() => {
    const saved = localStorage.getItem('safehome_balance');
    return saved ? Number(saved) : 2450000;
  });

  const [partnerTransactions, setPartnerTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem('safehome_transactions');
    return saved ? JSON.parse(saved) : [
      { id: 'TX1', amount: 15000, type: 'earn', description: 'Thưởng dắt khách #UTT99', date: '10:30 Hôm nay' },
      { id: 'TX2', amount: 500000, type: 'withdraw', description: 'Rút tiền về MBBank', date: 'Hôm qua' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('safehome_history', JSON.stringify(userHistory));
  }, [userHistory]);

  useEffect(() => {
    localStorage.setItem('safehome_balance', partnerBalance.toString());
  }, [partnerBalance]);

  useEffect(() => {
    localStorage.setItem('safehome_transactions', JSON.stringify(partnerTransactions));
  }, [partnerTransactions]);

  useEffect(() => {
    localStorage.setItem('safehome_dark', isDarkMode.toString());
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  // Giả lập hoàn thành chuyến đi sau 30 giây (đồng bộ với animation chậm)
  useEffect(() => {
    if (activeBooking?.status === 'in_progress') {
      const timer = setTimeout(() => {
        handleUpdateStatus('completed');
      }, 30000); 
      return () => clearTimeout(timer);
    }
  }, [activeBooking?.status]);

  const handlePartnerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (partnerAuth.user === 'admin' && partnerAuth.pass === 'utt') {
      setIsPartnerLoggedIn(true);
      setPartnerError('');
    } else {
      setPartnerError('Sai tài khoản hoặc mật khẩu!');
    }
  };

  const handleCreateBooking = (bookingData: Omit<Booking, 'id' | 'status' | 'timestamp'>) => {
    const newBooking: Booking = {
      ...bookingData,
      id: `UTT-${Math.random().toString(36).substr(2, 5).toUpperCase()}`,
      status: 'waiting_confirm',
      timestamp: Date.now(),
    };
    setActiveBooking(newBooking);
  };

  const handleUpdateStatus = (status: TripStatus) => {
    if (activeBooking) {
      const updated = { ...activeBooking, status };
      setActiveBooking(updated);

      if (status === 'in_progress') {
        const commission = Math.round(updated.price * 0.15);
        setPartnerBalance(prev => prev + commission);
        setPartnerTransactions(prev => [{
          id: `TX-${Date.now()}`,
          amount: commission,
          type: 'earn',
          description: `Hoa hồng giới thiệu khách ${updated.userName}`,
          date: 'Vừa xong'
        }, ...prev]);
      }

      if (status === 'completed') {
        setUserHistory(prev => [updated, ...prev]);
        setTimeout(() => setActiveBooking(null), 3000);
      } else if (status === 'cancelled') {
        setTimeout(() => setActiveBooking(null), 2000);
      }
    }
  };

  if (!appMode) {
    return (
      <div className={`min-h-screen w-full flex flex-col items-center justify-center p-6 transition-colors duration-500 ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-primary rounded-[2rem] flex items-center justify-center shadow-glow mb-6 mx-auto animate-bounce">
            <span className="material-icons-round text-white text-5xl">shield</span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter mb-2 italic uppercase leading-none">SAFE<span className="text-primary">HOME</span></h1>
          <p className="text-[10px] font-bold opacity-40 uppercase tracking-[0.4em]">UTT PERSISTENCE v10.2</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <button onClick={() => setAppMode('user')} className="group p-10 bg-white dark:bg-gray-900 rounded-[3rem] border-4 border-transparent hover:border-primary transition-all shadow-soft flex flex-col items-center text-center gap-6">
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-[1.8rem] flex items-center justify-center group-hover:scale-110 transition-transform"><span className="material-icons-round text-5xl">person</span></div>
            <div><h2 className="text-3xl font-black uppercase italic tracking-tighter">KHÁCH HÀNG</h2></div>
          </button>
          <button onClick={() => setAppMode('partner')} className="group p-10 bg-white dark:bg-gray-900 rounded-[3rem] border-4 border-transparent hover:border-blue-600 transition-all shadow-soft flex flex-col items-center text-center gap-6">
            <div className="w-20 h-20 bg-blue-600/10 text-blue-600 rounded-[1.8rem] flex items-center justify-center group-hover:scale-110 transition-transform"><span className="material-icons-round text-5xl">storefront</span></div>
            <div><h2 className="text-3xl font-black uppercase italic tracking-tighter">ĐỐI TÁC</h2></div>
          </button>
        </div>
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="mt-12 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-xl flex items-center gap-3 text-gray-400 font-bold text-xs uppercase tracking-widest">
          <span className="material-icons-round">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
          {isDarkMode ? 'Sáng' : 'Tối'}
        </button>
      </div>
    );
  }

  return (
    <div className={`min-h-screen w-full flex flex-col items-center py-8 px-4 transition-colors duration-500 ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-slate-100 text-slate-900'}`}>
      <button onClick={() => { setAppMode(null); setIsPartnerLoggedIn(false); setPartnerAuth({user:'', pass:''}); }} className="mb-8 px-6 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-2 hover:bg-slate-50 active:scale-95 transition-all">
        <span className="material-icons-round text-sm">grid_view</span>
        <span className="text-[10px] font-black uppercase tracking-widest">Đổi ứng dụng</span>
      </button>
      <div className="w-[340px] h-[700px] bg-black rounded-[3.5rem] border-[12px] border-gray-900 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 bg-white dark:bg-gray-950">
          {appMode === 'user' ? (
            <UserApp booking={activeBooking} userProfile={userProfile} history={userHistory} onCreateBooking={handleCreateBooking} onCancel={() => handleUpdateStatus('cancelled')} isDarkMode={isDarkMode} />
          ) : (
            !isPartnerLoggedIn ? (
              <div className="h-full flex flex-col p-8 pt-20 bg-slate-50 dark:bg-gray-950">
                 <div className="text-center mb-10"><div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center shadow-lg mx-auto mb-4"><span className="material-icons-round text-white text-3xl">lock</span></div><h2 className="text-2xl font-black uppercase italic tracking-tighter dark:text-white">Admin Login</h2></div>
                 <form onSubmit={handlePartnerLogin} className="space-y-4">
                    <input type="text" value={partnerAuth.user} onChange={e => setPartnerAuth({...partnerAuth, user: e.target.value})} className="w-full p-4 bg-white dark:bg-gray-900 rounded-2xl border-2 border-slate-100 dark:border-gray-800 font-bold outline-none dark:text-white" placeholder="admin" />
                    <input type="password" value={partnerAuth.pass} onChange={e => setPartnerAuth({...partnerAuth, pass: e.target.value})} className="w-full p-4 bg-white dark:bg-gray-900 rounded-2xl border-2 border-slate-100 dark:border-gray-800 font-bold outline-none dark:text-white" placeholder="••••" />
                    {partnerError && <p className="text-red-500 text-[10px] font-black text-center uppercase tracking-widest">{partnerError}</p>}
                    <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl active:scale-95 transition-all mt-4">XÁC NHẬN</button>
                 </form>
              </div>
            ) : (
              <PartnerApp activeBooking={activeBooking} balance={partnerBalance} transactions={partnerTransactions} onAccept={() => handleUpdateStatus('driver_assigned')} onReject={() => handleUpdateStatus('cancelled')} onComplete={() => handleUpdateStatus('in_progress')} onCreateBooking={handleCreateBooking} isDarkMode={isDarkMode} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
