
-- CREATE DATABASE IF NOT EXISTS safe_home;
-- USE safe_home;

-- 1. Bảng Người dùng (Khách hàng)
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    phone VARCHAR(15) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    avatar VARCHAR(255),
    points INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Bảng Đối tác (Nhân viên quán/Cửa hàng)
CREATE TABLE IF NOT EXISTS partners (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    store_name VARCHAR(100) NOT NULL,
    balance DECIMAL(15, 2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Bảng Chuyến đi (Bookings)
CREATE TABLE IF NOT EXISTS bookings (
    id VARCHAR(50) PRIMARY KEY,
    user_phone VARCHAR(15) NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    from_location VARCHAR(255) NOT NULL,
    to_location VARCHAR(255) NOT NULL,
    distance DECIMAL(5, 2) NOT NULL,
    service_type ENUM('taxi', 'driver') NOT NULL,
    vehicle_type ENUM('motorbike', 'car') NOT NULL,
    license_plate VARCHAR(20),
    price DECIMAL(15, 2) NOT NULL,
    status ENUM('idle', 'searching', 'waiting_confirm', 'driver_assigned', 'in_progress', 'completed', 'cancelled') DEFAULT 'waiting_confirm',
    partner_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (partner_id) REFERENCES partners(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Bảng Giao dịch (Lịch sử ví)
CREATE TABLE IF NOT EXISTS transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    partner_id INT NOT NULL,
    amount DECIMAL(15, 2) NOT NULL,
    type ENUM('earn', 'withdraw') NOT NULL,
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (partner_id) REFERENCES partners(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dữ liệu mẫu
INSERT INTO partners (username, password, store_name, balance) VALUES ('admin', 'utt', 'Bia Hơi UTT #01', 2450000);
