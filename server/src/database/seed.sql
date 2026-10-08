-- Reflect Fashion Seed Data for PostgreSQL

-- 1. Insert Categories
INSERT INTO categories (id, slug, name, description, image_url, display_order) VALUES
(1, 'men', 'Men''s Collection', 'Refined essentials and oversized silhouettes crafted for men.', '/images/Tshirts/men/m1.png', 1),
(2, 'women', 'Women''s Collection', 'Chic, breathable cotton tees and contemporary crop styles.', '/images/Tshirts/women/w1.png', 2),
(3, 'unisex', 'Unisex Styles', 'Versatile, gender-neutral staples for timeless everyday wear.', '/images/Tshirts/unisex/u1.png', 3)
ON CONFLICT (slug) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    image_url = EXCLUDED.image_url;

-- 2. Insert Core Products
INSERT INTO products (slug, sku, name, subtitle, description, price, compare_at_price, category_id, fabric, fit, in_stock, is_featured, is_trending, is_new, rating, reviews_count) VALUES
('classic-core-tee', 'RF-MEN-001', 'Classic Core Tee', 'Timeless Minimalist Fit', 'Premium 220 GSM heavyweight combed cotton designed for effortless daily layering.', 2800.00, 3200.00, 1, '100% Combed Cotton', 'Regular Fit', true, true, true, false, 4.9, 48),
('minimal-logo-tee', 'RF-MEN-002', 'Minimal Logo Tee', 'Subtle Chest Embroidery', 'Refined tonal branding on luxurious breathable fabric for a clean modern statement.', 3100.00, 3500.00, 1, '100% Organic Cotton', 'Relaxed Fit', true, true, false, true, 4.8, 32),
('urban-street-tee', 'RF-MEN-003', 'Urban Street Tee', 'Contemporary Drop-Shoulder', 'Architectural street silhouette with dropped shoulders and reinforced collar construction.', 3400.00, 3900.00, 1, 'Heavyweight Cotton', 'Oversized Fit', true, false, true, true, 5.0, 64),
('essential-crew-tee', 'RF-WMN-001', 'Essential Crew Tee', 'Effortless Daily Staple', 'Soft-touch tailored silhouette designed to drape cleanly with any outfit.', 2600.00, 2900.00, 2, 'Supima Cotton Blend', 'Slim Regular', true, true, true, false, 4.9, 56),
('oversized-lounge-tee', 'RF-WMN-002', 'Oversized Lounge Tee', 'Relaxed Weekend Comfort', 'Generously cut breathable loungewear piece with effortless drape.', 3200.00, 3600.00, 2, '100% Washed Cotton', 'Oversized Fit', true, false, true, true, 4.7, 29),
('all-day-basic-tee', 'RF-UNI-001', 'All-Day Basic Tee', 'Universal Everyday Cut', 'The quintessential neutral tee engineered for universal comfort and longevity.', 2750.00, 3100.00, 3, '100% Ring-Spun Cotton', 'Unisex Standard', true, true, false, false, 4.9, 82)
ON CONFLICT (slug) DO NOTHING;
