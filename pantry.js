/* ======================================================
   Kiran's Pantry — Food Inventory
   ======================================================
   Update this file whenever you buy or run out of items.
   The app uses this to show what you have in stock.
   
   Each item has:
   - name: Display name
   - category: 'protein' | 'carbs' | 'fat' | 'veggie' | 'fruit' | 'dairy' | 'spice' | 'supplement' | 'other'
   - inStock: true/false (toggle when you run out or restock)
   - unit: typical unit you buy/use
   - notes: optional notes
   ====================================================== */

const PANTRY = [

    // ===== PROTEINS =====
    { name: 'Chicken Breast',             category: 'protein',   inStock: true,  unit: 'lbs',    notes: '26g protein per 3 oz cooked' },
    { name: 'Chicken Thighs',             category: 'protein',   inStock: true,  unit: 'lbs',    notes: 'Boneless, for rice bowls & tikka' },
    { name: 'Goat Meat',                  category: 'protein',   inStock: true,  unit: 'lbs',    notes: '23g protein per 4 oz, for curry' },
    { name: 'Ground Lamb',                category: 'protein',   inStock: true,  unit: 'lbs',    notes: 'For keema' },
    { name: 'Salmon Fillets',             category: 'protein',   inStock: true,  unit: 'fillets',notes: 'Rich in Omega-3, 5 oz servings' },
    { name: 'Eggs',                       category: 'protein',   inStock: true,  unit: 'dozen',  notes: 'Free-range preferred, 6g protein each' },
    { name: 'Chickpeas (canned)',         category: 'protein',   inStock: true,  unit: 'cans',   notes: '15g protein per cup cooked' },
    { name: 'Whey Protein Powder',        category: 'protein',   inStock: true,  unit: 'tub',    notes: '24g protein per scoop' },

    // ===== CARBS / GRAINS =====
    { name: 'Daawat Basmati Rice',        category: 'carbs',     inStock: true,  unit: 'bag',    notes: 'Long grain, green package' },
    { name: 'Sweet Potato',               category: 'carbs',     inStock: true,  unit: 'pieces', notes: '35g carbs per medium' },
    { name: 'Whole Wheat Roti',           category: 'carbs',     inStock: true,  unit: 'pack',   notes: '30g carbs per medium roti' },

    // ===== FATS / OILS =====
    { name: 'Ghee',                       category: 'fat',       inStock: true,  unit: 'jar',    notes: '14g fat per tbsp' },
    { name: 'Mixed Nuts (Almonds/Cashews/Walnuts)', category: 'fat', inStock: true, unit: 'bag', notes: '15-20g fat per oz' },
    { name: 'Natural Peanut Butter',      category: 'fat',       inStock: true,  unit: 'jar',    notes: 'No added sugar' },
    { name: 'Olive Oil',                  category: 'fat',       inStock: true,  unit: 'bottle', notes: 'Extra virgin, for salads' },
    { name: 'Avocado',                    category: 'fat',       inStock: true,  unit: 'pieces', notes: 'For guacamole & salads' },
    { name: 'Whole Flax Seeds',           category: 'fat',       inStock: true,  unit: 'bag',    notes: '2 tbsp daily — Omega-3 anti-inflammatory' },

    // ===== VEGETABLES =====
    { name: 'Spinach (Fresh)',            category: 'veggie',    inStock: true,  unit: 'bag',    notes: 'For breakfast, salads, bowls' },
    { name: 'Tomatoes',                   category: 'veggie',    inStock: true,  unit: 'pieces', notes: 'For salads, curries, omelettes' },
    { name: 'Cucumber',                   category: 'veggie',    inStock: true,  unit: 'pieces', notes: 'For salads & snack sticks' },
    { name: 'Mushrooms',                  category: 'veggie',    inStock: true,  unit: 'pack',   notes: 'For night salads' },
    { name: 'Onions',                     category: 'veggie',    inStock: true,  unit: 'bag',    notes: 'Yellow/white, for curries' },
    { name: 'Bell Peppers',              category: 'veggie',    inStock: true,  unit: 'pieces', notes: 'For stir-fry & egg muffins' },
    { name: 'Broccoli',                  category: 'veggie',    inStock: true,  unit: 'head',   notes: 'For salmon bowl' },
    { name: 'Frozen Mixed Veggies',       category: 'veggie',    inStock: true,  unit: 'bag',    notes: 'Quick lunch side' },
    { name: 'Zucchini',                  category: 'veggie',    inStock: true,  unit: 'pieces', notes: 'For stir-fry' },
    { name: 'Baby Carrots',              category: 'veggie',    inStock: true,  unit: 'bag',    notes: 'For snacking with hummus' },
    { name: 'Green Chilies',             category: 'veggie',    inStock: true,  unit: 'pack',   notes: 'For masala omelette & curries' },
    { name: 'Cilantro',                  category: 'veggie',    inStock: true,  unit: 'bunch',  notes: 'Fresh, for garnish' },
    { name: 'Romaine Lettuce',           category: 'veggie',    inStock: true,  unit: 'head',   notes: 'For tandoori salad' },
    { name: 'Cherry Tomatoes',           category: 'veggie',    inStock: true,  unit: 'pack',   notes: 'For Mediterranean salad' },
    { name: 'Frozen Peas',              category: 'veggie',    inStock: true,  unit: 'bag',    notes: 'For keema' },

    // ===== FRUITS =====
    { name: 'Kiwi',                       category: 'fruit',     inStock: true,  unit: 'pieces', notes: 'Mandatory — Potassium Flush' },
    { name: 'Mandarin Oranges',           category: 'fruit',     inStock: true,  unit: 'bag',    notes: 'Afternoon snack' },
    { name: 'Banana',                     category: 'fruit',     inStock: true,  unit: 'bunch',  notes: 'For protein shakes' },
    { name: 'Lemon',                      category: 'fruit',     inStock: true,  unit: 'pieces', notes: 'Morning water + salad dressing' },
    { name: 'Apple',                      category: 'fruit',     inStock: true,  unit: 'pieces', notes: 'For snack with PB' },
    { name: 'Frozen Mango Chunks',        category: 'fruit',     inStock: true,  unit: 'bag',    notes: 'For mango protein smoothie' },

    // ===== DAIRY =====
    { name: 'Plain Greek Yogurt',         category: 'dairy',     inStock: true,  unit: 'tub',    notes: 'For snack, marinades, smoothies' },
    { name: 'Almond Milk',               category: 'dairy',     inStock: true,  unit: 'carton', notes: 'For protein shakes' },
    { name: 'Feta Cheese',               category: 'dairy',     inStock: true,  unit: 'pack',   notes: 'For Mediterranean salad' },

    // ===== SPICES & CONDIMENTS =====
    { name: 'Turmeric',                  category: 'spice',     inStock: true,  unit: 'jar',    notes: 'Anti-inflammatory' },
    { name: 'Cumin',                     category: 'spice',     inStock: true,  unit: 'jar',    notes: '' },
    { name: 'Garam Masala',              category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For goat curry & keema' },
    { name: 'Tandoori Masala',           category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For chicken tikka & tandoori salad' },
    { name: 'Tikka Masala Powder',       category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For chicken tikka bowl' },
    { name: 'Red Chili Powder',          category: 'spice',     inStock: true,  unit: 'jar',    notes: '' },
    { name: 'Garlic Powder',             category: 'spice',     inStock: true,  unit: 'jar',    notes: '' },
    { name: 'Paprika',                   category: 'spice',     inStock: true,  unit: 'jar',    notes: '' },
    { name: 'Dried Oregano',             category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For salmon & Mediterranean salad' },
    { name: 'Black Pepper',              category: 'spice',     inStock: true,  unit: 'grinder',notes: '' },
    { name: 'Salt',                      category: 'spice',     inStock: true,  unit: 'box',    notes: '' },
    { name: 'Ginger-Garlic Paste',       category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For curries' },
    { name: 'Cinnamon',                  category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For yogurt snack' },
    { name: 'Salsa',                     category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For rice bowls' },
    { name: 'Hummus',                    category: 'spice',     inStock: true,  unit: 'tub',    notes: 'For cucumber snack' },
    { name: 'Soy Sauce (Low Sodium)',    category: 'spice',     inStock: true,  unit: 'bottle', notes: 'For stir-fry' },
    { name: 'Honey',                     category: 'spice',     inStock: true,  unit: 'bottle', notes: 'Optional for yogurt' },
    { name: 'Guacamole',                 category: 'spice',     inStock: true,  unit: 'tub',    notes: 'For night salads' },
    { name: 'Olives',                    category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For Mediterranean salad' },
    { name: 'Mint Chutney / Raita',      category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For tikka bowl & tandoori salad' },
    { name: 'Sesame Seeds',             category: 'spice',     inStock: true,  unit: 'bag',    notes: 'For stir-fry garnish' },
    { name: 'Mustard',                   category: 'spice',     inStock: true,  unit: 'bottle', notes: 'For egg salad dressing' },
    { name: 'Everything Bagel Seasoning',category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For egg & avocado plate' },

    // ===== SUPPLEMENTS =====
    { name: 'Centrum Men Multivitamin',   category: 'supplement',inStock: true,  unit: 'bottle', notes: 'Morning with food' },
    { name: 'Vitamin D3 (1000 IU)',       category: 'supplement',inStock: true,  unit: 'bottle', notes: 'Morning with food' },
    { name: 'Youtheory Collagen Tablets', category: 'supplement',inStock: true,  unit: 'bottle', notes: '6 tablets at 10:30 AM' },
    { name: 'Magnesium Softgel (400mg)',  category: 'supplement',inStock: true,  unit: 'bottle', notes: 'Nighttime, muscle recovery' },

    // ===== BONE BROTH & LIQUIDS =====
    { name: 'Chicken Bone Broth',         category: 'other',     inStock: true,  unit: 'carton', notes: 'Liquid Gold — cook rice in this' },
    { name: 'Cooking Spray',              category: 'other',     inStock: true,  unit: 'can',    notes: 'For egg muffins' },
];

// Category display config
const PANTRY_CATEGORIES = {
    protein:    { label: 'Proteins',             icon: '🥩', color: '#f472b6' },
    carbs:      { label: 'Carbs & Grains',       icon: '🍚', color: '#fbbf24' },
    fat:        { label: 'Fats & Oils',          icon: '🥑', color: '#34d399' },
    veggie:     { label: 'Vegetables',           icon: '🥦', color: '#4ade80' },
    fruit:      { label: 'Fruits',               icon: '🍎', color: '#fb923c' },
    dairy:      { label: 'Dairy',                icon: '🥛', color: '#a78bfa' },
    spice:      { label: 'Spices & Condiments',  icon: '🧂', color: '#f97316' },
    supplement: { label: 'Supplements',          icon: '💊', color: '#38bdf8' },
    other:      { label: 'Other',                icon: '📦', color: '#94a3b8' },
};
