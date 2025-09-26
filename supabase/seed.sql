-- Seed data for Fruit Habibi marketplace

-- Insert sample users
INSERT INTO users (id, email, full_name, role, country, phone, company_name) VALUES
  ('11111111-1111-1111-1111-111111111111', 'admin@fruithabibi.com', 'Admin User', 'admin', 'UAE', '+971501234567', 'Fruit Habibi Admin'),
  ('22222222-2222-2222-2222-222222222222', 'farmer1@example.com', 'Ahmed Hassan', 'farmer', 'Egypt', '+201234567890', 'Hassan Farms'),
  ('33333333-3333-3333-3333-333333333333', 'farmer2@example.com', 'Fatima Al-Zahra', 'farmer', 'Morocco', '+212123456789', 'Atlas Fresh Produce'),
  ('44444444-4444-4444-4444-444444444444', 'farmer3@example.com', 'Kwame Asante', 'farmer', 'Ghana', '+233123456789', 'Golden Harvest Co.'),
  ('55555555-5555-5555-5555-555555555555', 'importer1@example.com', 'Mohammed Al-Rashid', 'importer', 'UAE', '+971501234567', 'Al-Rashid Trading'),
  ('66666666-6666-6666-6666-666666666666', 'importer2@example.com', 'Sarah Johnson', 'importer', 'Saudi Arabia', '+966501234567', 'Johnson Imports'),
  ('77777777-7777-7777-7777-777777777777', 'importer3@example.com', 'Ahmed Al-Mansouri', 'importer', 'Qatar', '+974501234567', 'Mansouri Distributors');

-- Insert sample products
INSERT INTO products (id, farmer_id, title, description, price_per_unit, currency, unit, quantity_available, category, country, images, is_approved) VALUES
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '22222222-2222-2222-2222-222222222222', 'Premium Egyptian Mangoes', 'Sweet and juicy Egyptian mangoes, perfect for export. Grown in the fertile Nile Delta region.', 2.50, 'USD', 'kg', 5000, 'Fruits', 'Egypt', ARRAY['https://images.unsplash.com/photo-1605027990121-4754801905e5?w=500', 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500'], true),
  
  ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '22222222-2222-2222-2222-222222222222', 'Fresh Egyptian Oranges', 'High-quality Egyptian oranges with excellent taste and long shelf life.', 1.80, 'USD', 'kg', 8000, 'Fruits', 'Egypt', ARRAY['https://images.unsplash.com/photo-1557800634-7bf3ed73b8e0?w=500', 'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=500'], true),
  
  ('cccccccc-cccc-cccc-cccc-cccccccccccc', '33333333-3333-3333-3333-333333333333', 'Moroccan Argan Oil', 'Pure, cold-pressed argan oil from the Atlas Mountains. Perfect for culinary and cosmetic use.', 45.00, 'USD', 'liter', 200, 'Oils', 'Morocco', ARRAY['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500'], true),
  
  ('dddddddd-dddd-dddd-dddd-dddddddddddd', '33333333-3333-3333-3333-333333333333', 'Fresh Moroccan Dates', 'Premium Medjool dates from Morocco. Sweet, soft, and perfect for export.', 8.50, 'USD', 'kg', 3000, 'Fruits', 'Morocco', ARRAY['https://images.unsplash.com/photo-1605027990121-4754801905e5?w=500'], true),
  
  ('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', '44444444-4444-4444-4444-444444444444', 'Ghanaian Cocoa Beans', 'Premium quality cocoa beans from Ghana. Perfect for chocolate production.', 3.20, 'USD', 'kg', 10000, 'Grains', 'Ghana', ARRAY['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500'], true),
  
  ('ffffffff-ffff-ffff-ffff-ffffffffffff', '44444444-4444-4444-4444-444444444444', 'Fresh Pineapples', 'Sweet and juicy pineapples from Ghana. Ready for export with proper packaging.', 2.00, 'USD', 'kg', 6000, 'Fruits', 'Ghana', ARRAY['https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500'], true),
  
  ('gggggggg-gggg-gggg-gggg-gggggggggggg', '22222222-2222-2222-2222-222222222222', 'Egyptian Potatoes', 'High-quality potatoes suitable for various culinary applications.', 0.80, 'USD', 'kg', 15000, 'Vegetables', 'Egypt', ARRAY['https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500'], true),
  
  ('hhhhhhhh-hhhh-hhhh-hhhh-hhhhhhhhhhhh', '33333333-3333-3333-3333-333333333333', 'Moroccan Olives', 'Premium green and black olives from Morocco. Perfect for export.', 4.50, 'USD', 'kg', 4000, 'Vegetables', 'Morocco', ARRAY['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500'], true);

-- Insert sample chats
INSERT INTO chats (id, product_id, farmer_id, importer_id) VALUES
  ('iiiiiiii-iiii-iiii-iiii-iiiiiiiiiiii', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '22222222-2222-2222-2222-222222222222', '55555555-5555-5555-5555-555555555555'),
  ('jjjjjjjj-jjjj-jjjj-jjjj-jjjjjjjjjjjj', 'cccccccc-cccc-cccc-cccc-cccccccccccc', '33333333-3333-3333-3333-333333333333', '66666666-6666-6666-6666-666666666666'),
  ('kkkkkkkk-kkkk-kkkk-kkkk-kkkkkkkkkkkk', 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', '44444444-4444-4444-4444-444444444444', '77777777-7777-7777-7777-777777777777');

-- Insert sample messages
INSERT INTO messages (id, product_id, sender_id, receiver_id, content) VALUES
  ('llllllll-llll-llll-llll-llllllllllll', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '55555555-5555-5555-5555-555555555555', '22222222-2222-2222-2222-222222222222', 'Hello! I am interested in your premium Egyptian mangoes. What is the minimum order quantity?'),
  ('mmmmmmmm-mmmm-mmmm-mmmm-mmmmmmmmmmmm', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '22222222-2222-2222-2222-222222222222', '55555555-5555-5555-5555-555555555555', 'Thank you for your interest! The minimum order quantity is 1000 kg. We can arrange shipping to UAE.'),
  ('nnnnnnnn-nnnn-nnnn-nnnn-nnnnnnnnnnnn', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '55555555-5555-5555-5555-555555555555', '22222222-2222-2222-2222-222222222222', 'Perfect! What would be the total cost for 2000 kg including shipping to Dubai?'),
  ('oooooooo-oooo-oooo-oooo-oooooooooooo', 'cccccccc-cccc-cccc-cccc-cccccccccccc', '66666666-6666-6666-6666-666666666666', '33333333-3333-3333-3333-333333333333', 'Hi! I would like to know more about your argan oil. Do you have organic certification?'),
  ('pppppppp-pppp-pppp-pppp-pppppppppppp', 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', '77777777-7777-7777-7777-777777777777', '44444444-4444-4444-4444-444444444444', 'Hello! I am interested in your cocoa beans. What is the quality grade and moisture content?');
