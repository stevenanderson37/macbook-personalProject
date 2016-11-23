CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  company_name VARCHAR(100),
  primary_area VARCHAR(100),
  primary_phone VARCHAR(100),
  street_address_a VARCHAR(100),
  street_address_b VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(100),
  zip VARCHAR(100),
  business_address BOOLEAN,
  email VARCHAR(100),
  mobile_area VARCHAR(100),
  mobile_phone VARCHAR(100)
);

CREATE TABLE macbooks
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  processor VARCHAR(100),
  sdram VARCHAR(100),
  storage VARCHAR(100),
  graphics VARCHAR(100),
  keyboard VARCHAR(100),
  accessory_kit VARCHAR(100),
  price INTEGER
);

CREATE TABLE products_in_cart
(
  id SERIAL PRIMARY KEY,
  orderid INTEGER,
  productid INTEGER,
  qty INTEGER
);

CREATE TABLE orders
(
  id SERIAL PRIMARY KEY,
  userid INTEGER,
  productid INTEGER,
  complete BOOLEAN,
  qty INTEGER
);

CREATE TABLE macbook
(
  id SERIAL PRIMARY KEY,
  productid INTEGER,
  finishid INTEGER,
  storageid INTEGER,
  processorid INTEGER,
  keyboardid INTEGER,
  applecareid INTEGER,
  price DECIMAL
);

CREATE TABLE products
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  base_price DECIMAL,
  lowest_price DECIMAL
);

CREATE TABLE finish
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(75)
);

CREATE TABLE storage
(
  id SERIAL PRIMARY KEY,
  flash_storage VARCHAR(75),
  upgrade_price DECIMAL
);

CREATE TABLE processor
(
  id SERIAL PRIMARY KEY,
  processor_name VARCHAR(75),
  turbo_boost VARCHAR(75),
  upgrade_price DECIMAL
);

CREATE TABLE keyboard
(
  id SERIAL PRIMARY KEY,
  type VARCHAR(75),
  language VARCHAR(75),
  documentation VARCHAR(75)
);

CREATE TABLE applecare
(
  id SERIAL PRIMARY KEY,
  coverage_group VARCHAR(75),
  coverage_length VARCHAR(20),
  price DECIMAL
);

CREATE TABLE accessories
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(75),
  description VARCHAR(1000),
  image_url VARCHAR(1000),
  price DECIMAL
);

CREATE TABLE billing_info
(
  country VARCHAR(100),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  primary_area VARCHAR(100),
  primary_phone VARCHAR(100),
  alt_area VARCHAR(100),
  alt_phone VARCHAR(100),
  email VARCHAR(100),
  company_name VARCHAR(100),
  street_address_a VARCHAR(100),
  street_address_b VARCHAR(100),
  zip VARCHAR(100)
);

-- users

INSERT INTO users
(first_name, last_name, primary_area, primary_phone, street_address_a, city, state, zip, business_address, email)
VALUES ('Milo', 'Perry', '801', '722-4966', '8965 Fake Address Pass', 'Provo', 'UT', '84065', 'false', 'awesomeson@family.com');

INSERT INTO users
(first_name, last_name, primary_area, primary_phone, street_address_a, city, state, zip, business_address, email)
VALUES ('Steven', 'Perry', '801', '722-4966', 'A Fake Address', 'Provo', 'UT', '84065', 'false', 'boringemail@email.com');

-- products

INSERT INTO products
(name, base_price, lowest_price)
VALUES ('12-inch MacBook', 1199.00, 1299.00);

INSERT INTO products
(name, lowest_price)
VALUES ('MacBook Air', 999.00);

INSERT INTO products
(name, lowest_price)
VALUES ('13-inch MacBook Pro', 1499.00);

INSERT INTO products
(name, lowest_price)
VALUES ('15-inch MacBook Pro', 2399.00);

INSERT INTO products
(name, lowest_price)
VALUES ('21.5-inch iMac', 1099.00);

INSERT INTO products
(name, lowest_price)
VALUES ('21.5-inch iMac with Retina 4K display', 1499.00);

INSERT INTO products
(name, lowest_price)
VALUES ('27-inch iMac with Retina 5K display', 1799.00);

INSERT INTO products
(name, lowest_price)
VALUES ('Mac Pro', 2999.00);

INSERT INTO products
(name, lowest_price)
VALUES ('Mac mini', 499.00);

-- finish

INSERT INTO finish
(name)
VALUES ('Silver');

INSERT INTO finish
(name)
VALUES ('Gold');

INSERT INTO finish
(name)
VALUES ('Space Gray');

INSERT INTO finish
(name)
VALUES ('Rose Gold');

-- storage

INSERT INTO storage
(flash_storage, upgrade_price)
VALUES ('256GB', 100.00);

INSERT INTO storage
(flash_storage, upgrade_price)
VALUES ('512GB', 300.00);

-- processor

INSERT INTO processor
(processor_name, upgrade_price)
VALUES ('1.1GHz dual-core Intel Core m3 processor, Turbo Boost up to 2.2GHz', 0.00);

INSERT INTO processor
(processor_name, upgrade_price)
VALUES ('1.2GHz dual-core Intel Core m5 processor, Turbo Boost up to 2.7GHz', 100.00);

INSERT INTO processor
(processor_name, upgrade_price)
VALUES ('1.3GHz dual-core Intel Core m7 processor, Turbo Boost up to 3.1GHz', 250.00);

-- keyboard

INSERT INTO keyboard
(type, language, documentation)
VALUES ('Backlit Keyboard',	'English',	'User’s Guide');

INSERT INTO keyboard
(type, language, documentation)
VALUES ('Backlit Keyboard',	'Arabic',	'User’s Guide');

INSERT INTO keyboard
(type, language, documentation)
VALUES ('Backlit Keyboard',	'British',	'User’s Guide');

INSERT INTO keyboard
(type, language, documentation)
VALUES ('Backlit Keyboard',	'Danish',	'User’s Guide');

INSERT INTO keyboard
(type, language, documentation)
VALUES ('Backlit Keyboard',	'French',	'User’s Guide');

INSERT INTO keyboard
(type, language, documentation)
VALUES ('Backlit Keyboard',	'German',	'User’s Guide');

INSERT INTO keyboard
(type, language, documentation)
VALUES ('Backlit Keyboard',	'Italian',	'User’s Guide');

INSERT INTO keyboard
(type, language, documentation)
VALUES ('Backlit Keyboard',	'Japanese',	'User’s Guide');

INSERT INTO keyboard
(type, language, documentation)
VALUES ('Backlit Keyboard',	'Norwegian',	'User’s Guide');

INSERT INTO keyboard
(type, language, documentation)
VALUES ('Backlit Keyboard',	'Swedish',	'User’s Guide');

INSERT INTO keyboard
(type, language, documentation)
VALUES ('Backlit Keyboard',	'Western Spanish',	'User’s Guide');

-- applecare

INSERT INTO applecare
(coverage_group, coverage_length, price)
VALUES ('MacBook / MacBook Air / 13” MacBook Pro',	'3 Years',	249.00);

-- accessories

INSERT INTO accessories
(name, description, image_url, price)
VALUES ('USB-C to Lightning Cable (1 m)',	'This USB-C cable lets you connect your iPhone, iPad, or iPod with Lightning connector to your MacBook with USB-C port for syncing and charging.', 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/M/KQ/MKQ42/MKQ42?wid=408&hei=408&align=0,-1&fmt=png-alpha&qlt=95&.v=1470090009348',	25.00);

INSERT INTO accessories
(name, description, image_url, price)
VALUES ('USB-C to USB Adapter',	'The USB-C to USB Adapter lets you connect your MacBook with USB-C port to many of your standard USB accessories, including your camera, flash drive, and a Lightning to USB Cable for charging and syncing your iPhone, iPad, or iPod.* *Some USB accessories are not supported.', 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/c/to/cto/type/cto-type-c-usb-adapter?wid=408&hei=408&align=0,-1&fmt=png-alpha&qlt=95&.v=7Dmlp2',	19.00);

INSERT INTO accessories
(name, description, image_url, price)
VALUES ('SanDisk 64GB Dual Drive USB-C Flash Drive', 'Designed exclusively for Apple, the SanDisk Dual Drive USB-C flash drive takes advantage of USB-C speeds to rapidly transfer files to and from your Mac. Its elegant metal design helps keep your photos, movies, music, and data safe as you carry and share them.', 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/H/JV/HJV72/HJV72?wid=408&hei=408&align=0,-1&fmt=png-alpha&qlt=95&.v=aHLlT3',	69.95);

INSERT INTO accessories
(name, description, image_url, price)
VALUES ('USB-C Digital AV Multiport Adapter',	'The USB-C Digital AV Multiport Adapter lets you connect your MacBook with USB-C port to an HDMI display, while also connecting a standard USB device and charging cable. Review the documentation or check with the manufacturer of your display to make sure you’re choosing the right adapter.', 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/c/to/cto/type/cto-type-c-digital-av-adapter?wid=408&hei=408&align=0,-1&fmt=png-alpha&qlt=95&.v=aGqlf0',	69.00);

INSERT INTO accessories
(name, description, image_url, price)
VALUES ('Belkin 3.1 USB-C to USB-C Cable', "The Belkin 3.1 USB-C to USB-C Cable allows you to charge your USB-C-enabled device quickly and safely. Simply plug into any USB-C port to not only charge, but sync and transfer data as well. With a sleek and low-profile connector, this cable's minimal design harnesses the incredible power within. Experience up to 10 Gbps transfer speeds — up to 20x faster than USB 2.0 (480 Mbps).", 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/H/HS/HHSN2/HHSN2?wid=408&hei=408&align=0,-1&fmt=png-alpha&qlt=95&.v=o28lZ2',	29.95);

INSERT INTO accessories
(name, description, image_url, price)
VALUES ('Belkin 3.1 USB-A to USB-C Cable', 'The Belkin 3.1 USB-A to USB-C Cable allows you to charge your USB-C-enabled device, as well as sync your photos, music and data to your existing MacBook. Experience up to 10 Gbps transfer rates — up to 20x faster than USB 2.0 (480 Mbps).', 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/H/HS/HHSM2/HHSM2?wid=408&hei=408&align=0,-1&fmt=png-alpha&qlt=95&.v=UerlH3',	29.95);

INSERT INTO accessories
(name, description, image_url, price)
VALUES ("LaCie 1TB P'9227 Porsche Design USB-C Mobile Hard Drive", 'Melding advanced functionality and iconic minimalist design, the LaCie Porsche Design USB-C Mobile hard drive delivers speeds of up to 5 Gbps for rapidly transferring your Mac files. All it takes is a simple drag and drop to store your movies, photos, music, and data. The drive also ensures compatibility with Macs and PCs that have USB 3.0 ports thanks to an included USB-C to USB-A cable.', 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/H/JZ/HJZ02/HJZ02?wid=408&hei=408&align=0,-1&fmt=png-alpha&qlt=95&.v=NMxlP1',	109.95);

INSERT INTO accessories
(name, description, image_url, price)
VALUES ('AirPort Time Capsule - 2TB',	'AirPort Time Capsule is a wireless backup device that works automatically with Time Machine in OS X to create an easy-to-use, hassle-free backup solution. A 2TB or 3TB hard drive gives you the capacity and safety needed for reliably backing up your Mac computers. AirPort Time Capsule is also a full-featured Wi-Fi base station with 802.11ac technology. So you can set up a high-speed wireless network and back up the Mac computers on your network. All with one device.', 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/c/to/cto/timecapsule/cto-timecapsule-2013?wid=408&hei=408&align=0,-1&fmt=png-alpha&qlt=95&.v=KKGkt3',	299.00);

INSERT INTO accessories
(name, description, image_url, price)
VALUES ('AirPort Time Capsule - 3TB',	'AirPort Time Capsule is a wireless backup device that works automatically with Time Machine in OS X to create an easy-to-use, hassle-free backup solution. A 2TB or 3TB hard drive gives you the capacity and safety needed for reliably backing up your Mac computers. AirPort Time Capsule is also a full-featured Wi-Fi base station with 802.11ac technology. So you can set up a high-speed wireless network and back up the Mac computers on your network. All with one device.', 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/c/to/cto/timecapsule/cto-timecapsule-2013?wid=408&hei=408&align=0,-1&fmt=png-alpha&qlt=95&.v=KKGkt3',	399.00);

INSERT INTO accessories
(name, description, image_url, price)
VALUES ('AirPort Express', "With AirPort Express or AirPort Extreme, it's easier than ever to set up and manage a secure wireless network. AirPort Express is recommended for apartment, smaller home or dorm. AirPort Extreme is recommended for larger home, office or classroom. Capable of delivering outstanding wireless performance, you get the fastest connection for each of your Wi-Fi devices: iPhone, iPad, iPod touch, Mac or Windows PC. They even offer a convenient guest networking feature and can also be used to extend the range of a wireless network already up-and-running. Both AirPort Express and AirPort Extreme allow you to print wirelessly to any printer connected to its standard USB port and setup is also a snap using either the assistant built into iOS or the Airport Utility for OS X.", 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/c/to/cto/airport/cto-airport?wid=408&hei=408&align=0,-1&fmt=png-alpha&qlt=95&.v=gtrk73',	99.00);

INSERT INTO accessories
(name, description, image_url, price)
VALUES ('Airport Extreme', "With AirPort Express or AirPort Extreme, it's easier than ever to set up and manage a secure wireless network. AirPort Express is recommended for apartment, smaller home or dorm. AirPort Extreme is recommended for larger home, office or classroom. Capable of delivering outstanding wireless performance, you get the fastest connection for each of your Wi-Fi devices: iPhone, iPad, iPod touch, Mac or Windows PC. They even offer a convenient guest networking feature and can also be used to extend the range of a wireless network already up-and-running. Both AirPort Express and AirPort Extreme allow you to print wirelessly to any printer connected to its standard USB port and setup is also a snap using either the assistant built into iOS or the Airport Utility for OS X.", 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/c/to/cto/airport/cto-airport?wid=408&hei=408&align=0,-1&fmt=png-alpha&qlt=95&.v=gtrk73',	199.00);

INSERT INTO accessories
(name, description, image_url, price)
VALUES ('Incase 12" Hardshell Case for MacBook - Rose',	'Lightweight and durable, the Incase Hardshell case wraps your MacBook in form-fitting protection while maintaining easy access to ports and connections. Its sophisticated styling and range of colours let you add a personal touch. And to keep your MacBook cool and firmly in place, there’s injection-moulded construction and rubberised feet.', 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/H/HQ/HHQ12/HHQ12?wid=408&hei=408&align=0,-1&fmt=png-alpha&qlt=95&.v=1463597372312',	49.95);

INSERT INTO accessories
(name, description, image_url, price)
VALUES ('Incase 12" Hardshell Case for MacBook - Teal',	'Lightweight and durable, the Incase Hardshell case wraps your MacBook in form-fitting protection while maintaining easy access to ports and connections. Its sophisticated styling and range of colours let you add a personal touch. And to keep your MacBook cool and firmly in place, there’s injection-moulded construction and rubberised feet.', 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/H/HQ/HHQ12/HHQ12?wid=408&hei=408&align=0,-1&fmt=png-alpha&qlt=95&.v=1463597372312',	49.95);

INSERT INTO accessories
(name, description, image_url, price)
VALUES ('Microsoft Office 365 Personal (1-year Subscription; 1 License)',	'Office gives you a suite of powerful productivity apps, including Word, Excel, PowerPoint, and OneNote. Choose the version that’s right for you. Office 365 is a convenient annual subscription delivering exclusive monthly upgrades and new features on your Mac, iPad, and iPhone—so you can get things done from virtually anywhere. Office Home & Student 2016 is a one-time purchase that’s ideal for use on a single Mac.', 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/c/to/cto/office365/cto-office365-2015?wid=408&hei=408&align=0,-1&fmt=png-alpha&qlt=95&.v=1465325610380',	69.95);

INSERT INTO accessories
(name, description, image_url, price)
VALUES ('Microsoft Office 365 Home (1-year Subscription; 5 Licenses)',	'Office gives you a suite of powerful productivity apps, including Word, Excel, PowerPoint, and OneNote. Choose the version that’s right for you. Office 365 is a convenient annual subscription delivering exclusive monthly upgrades and new features on your Mac, iPad, and iPhone—so you can get things done from virtually anywhere. Office Home & Student 2016 is a one-time purchase that’s ideal for use on a single Mac.', 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/c/to/cto/office365/cto-office365-2015?wid=408&hei=408&align=0,-1&fmt=png-alpha&qlt=95&.v=1465325610380',	99.95);

-- macbooks

INSERT INTO macbooks
(name, processor, sdram, storage, graphics, keyboard, accessory_kit, price)
VALUES ('12-inch MacBook 256GB - Silver',	'1.1GHz dual-core Intel Core m3, Turbo Boost up to 2.2GHz',	'8GB 1866MHz LPDDR3 SDRAM',	'256GB PCIe-based onboard flash storage',	'Intel HD Graphics 515',	'Backlit Keyboard (English) & Users Guide',	'Accessory Kit',	1299.00);

INSERT INTO macbooks
(name, processor, sdram, storage, graphics, keyboard, accessory_kit, price)
VALUES ('12-inch MacBook 256GB - Silver',	'1.3GHz dual-core Intel Core m7, Turbo Boost up to 3.1GHz',	'8GB 1866MHz LPDDR3 SDRAM',	'256GB PCIe-based onboard flash storage',	'Intel HD Graphics 515',	'Backlit Keyboard (English) & Users Guide',	'Accessory Kit',	1549.00);

INSERT INTO macbooks
(name, processor, sdram, storage, graphics, keyboard, accessory_kit, price)
VALUES ('12-inch MacBook 256GB - Gold',	'1.1GHz dual-core Intel Core m3, Turbo Boost up to 2.2GHz',	'8GB 1866MHz LPDDR3 SDRAM',	'256GB PCIe-based onboard flash storage',	'Intel HD Graphics 515',	'Backlit Keyboard (English) & Users Guide',	'Accessory Kit',	1299.00);

INSERT INTO macbooks
(name, processor, sdram, storage, graphics, keyboard, accessory_kit, price)
VALUES ('12-inch MacBook 256GB - Gold',	'1.3GHz dual-core Intel Core m7, Turbo Boost up to 3.1GHz',	'8GB 1866MHz LPDDR3 SDRAM',	'256GB PCIe-based onboard flash storage',	'Intel HD Graphics 515',	'Backlit Keyboard (English) & Users Guide',	'Accessory Kit',	1549.00);

INSERT INTO macbooks
(name, processor, sdram, storage, graphics, keyboard, accessory_kit, price)
VALUES ('12-inch MacBook 256GB - Space Gray',	'1.1GHz dual-core Intel Core m3, Turbo Boost up to 2.2GHz',	'8GB 1866MHz LPDDR3 SDRAM',	'256GB PCIe-based onboard flash storage',	'Intel HD Graphics 515',	'Backlit Keyboard (English) & Users Guide',	'Accessory Kit',	1299.00);

INSERT INTO macbooks
(name, processor, sdram, storage, graphics, keyboard, accessory_kit, price)
VALUES ('12-inch MacBook 256GB - Space Gray',	'1.3GHz dual-core Intel Core m7, Turbo Boost up to 3.1GHz',	'8GB 1866MHz LPDDR3 SDRAM',	'256GB PCIe-based onboard flash storage',	'Intel HD Graphics 515',	'Backlit Keyboard (English) & Users Guide',	'Accessory Kit',	1549.00);

INSERT INTO macbooks
(name, processor, sdram, storage, graphics, keyboard, accessory_kit, price)
VALUES ('12-inch MacBook 256GB - Rose Gold',	'1.1GHz dual-core Intel Core m3, Turbo Boost up to 2.2GHz',	'8GB 1866MHz LPDDR3 SDRAM',	'256GB PCIe-based onboard flash storage',	'Intel HD Graphics 515',	'Backlit Keyboard (English) & Users Guide',	'Accessory Kit',	1299.00);

INSERT INTO macbooks
(name, processor, sdram, storage, graphics, keyboard, accessory_kit, price)
VALUES ('12-inch MacBook 256GB - Rose Gold',	'1.3GHz dual-core Intel Core m7, Turbo Boost up to 3.1GHz',	'8GB 1866MHz LPDDR3 SDRAM',	'256GB PCIe-based onboard flash storage',	'Intel HD Graphics 515',	'Backlit Keyboard (English) & Users Guide',	'Accessory Kit',	1549.00);

INSERT INTO macbooks
(name, processor, sdram, storage, graphics, keyboard, accessory_kit, price)
VALUES ('12-inch MacBook 512GB - Silver',	'1.2GHz dual-core Intel Core m5, Turbo Boost up to 2.7GHz',	'8GB 1866MHz LPDDR3 SDRAM',	'512GB PCIe-based onboard flash storage',	'Intel HD Graphics 515',	'Backlit Keyboard (English) & Users Guide',	'Accessory Kit',	1599.00);

INSERT INTO macbooks
(name, processor, sdram, storage, graphics, keyboard, accessory_kit, price)
VALUES ('12-inch MacBook 512GB - Silver',	'1.3GHz dual-core Intel Core m7, Turbo Boost up to 3.1GHz',	'8GB 1866MHz LPDDR3 SDRAM',	'512GB PCIe-based onboard flash storage',	'Intel HD Graphics 515',	'Backlit Keyboard (English) & Users Guide',	'Accessory Kit',	1749.00);

INSERT INTO macbooks
(name, processor, sdram, storage, graphics, keyboard, accessory_kit, price)
VALUES ('12-inch MacBook 512GB - Gold',	'1.2GHz dual-core Intel Core m5, Turbo Boost up to 2.7GHz',	'8GB 1866MHz LPDDR3 SDRAM',	'512GB PCIe-based onboard flash storage',	'Intel HD Graphics 515',	'Backlit Keyboard (English) & Users Guide',	'Accessory Kit',	1599.00);

INSERT INTO macbooks
(name, processor, sdram, storage, graphics, keyboard, accessory_kit, price)
VALUES ('12-inch MacBook 512GB - Gold',	'1.3GHz dual-core Intel Core m7, Turbo Boost up to 3.1GHz',	'8GB 1866MHz LPDDR3 SDRAM',	'512GB PCIe-based onboard flash storage',	'Intel HD Graphics 515',	'Backlit Keyboard (English) & Users Guide',	'Accessory Kit',	1749.00);

INSERT INTO macbooks
(name, processor, sdram, storage, graphics, keyboard, accessory_kit, price)
VALUES ('12-inch MacBook 512GB - Space Gray',	'1.2GHz dual-core Intel Core m5, Turbo Boost up to 2.7GHz',	'8GB 1866MHz LPDDR3 SDRAM',	'512GB PCIe-based onboard flash storage',	'Intel HD Graphics 515',	'Backlit Keyboard (English) & Users Guide',	'Accessory Kit',	1599.00);

INSERT INTO macbooks
(name, processor, sdram, storage, graphics, keyboard, accessory_kit, price)
VALUES ('12-inch MacBook 512GB - Space Gray',	'1.3GHz dual-core Intel Core m7, Turbo Boost up to 3.1GHz',	'8GB 1866MHz LPDDR3 SDRAM',	'512GB PCIe-based onboard flash storage',	'Intel HD Graphics 515',	'Backlit Keyboard (English) & Users Guide',	'Accessory Kit',	1749.00);

INSERT INTO macbooks
(name, processor, sdram, storage, graphics, keyboard, accessory_kit, price)
VALUES ('12-inch MacBook 512GB - Rose Gold',	'1.2GHz dual-core Intel Core m5, Turbo Boost up to 2.7GHz',	'8GB 1866MHz LPDDR3 SDRAM',	'512GB PCIe-based onboard flash storage',	'Intel HD Graphics 515',	'Backlit Keyboard (English) & Users Guide',	'Accessory Kit',	1599.00);

INSERT INTO macbooks
(name, processor, sdram, storage, graphics, keyboard, accessory_kit, price)
VALUES ('12-inch MacBook 512GB - Rose Gold',	'1.3GHz dual-core Intel Core m7, Turbo Boost up to 3.1GHz',	'8GB 1866MHz LPDDR3 SDRAM',	'512GB PCIe-based onboard flash storage',	'Intel HD Graphics 515',	'Backlit Keyboard (English) & Users Guide',	'Accessory Kit',	1749.00);
