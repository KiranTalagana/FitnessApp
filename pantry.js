/* ======================================================
   Kiran's Pantry — Food Inventory
   ======================================================
   Update this file whenever you buy or run out of items.
   The app uses this to show what you have in stock and
   automatically adjusts recipes based on availability.
   
   Each item has:
   - name: Display name
   - category: 'protein' | 'carbs' | 'fat' | 'veggie' | 'fruit' | 'dairy' | 'spice' | 'supplement' | 'other'
   - inStock: true/false (toggle when you run out or restock)
   - unit: typical unit you buy/use
   - notes: optional notes
   - keywords: ingredient strings to match against recipes
   ====================================================== */

const PANTRY = [

    // ===== PROTEINS =====
    { name: 'Chicken Breast',             category: 'protein',   inStock: true,  unit: 'lbs',    notes: '26g protein per 3 oz cooked',           keywords: ['chicken breast', 'grilled chicken'] },
    { name: 'Chicken Thighs',             category: 'protein',   inStock: true,  unit: 'lbs',    notes: 'Boneless, for rice bowls & tikka',       keywords: ['chicken thigh'] },
    { name: 'Goat Meat',                  category: 'protein',   inStock: true,  unit: 'lbs',    notes: '23g protein per 4 oz, for curry',        keywords: ['goat'] },
    { name: 'Ground Lamb',                category: 'protein',   inStock: true,  unit: 'lbs',    notes: 'For keema',                             keywords: ['lamb', 'ground lamb'] },
    { name: 'Salmon Fillets',             category: 'protein',   inStock: true,  unit: 'fillets',notes: 'Rich in Omega-3, 5 oz servings',        keywords: ['salmon'] },
    { name: 'Eggs',                       category: 'protein',   inStock: true,  unit: 'dozen',  notes: 'Free-range preferred, 6g protein each', keywords: ['egg', 'eggs'] },
    { name: 'Chickpeas (canned)',         category: 'protein',   inStock: true,  unit: 'cans',   notes: '15g protein per cup cooked',            keywords: ['chickpea'], isFiber: true },
    { name: 'Whey Protein Powder',        category: 'protein',   inStock: true,  unit: 'tub',    notes: '24g protein per scoop',                 keywords: ['whey protein', 'whey'] },

    // ===== CARBS / GRAINS =====
    { name: 'Daawat Basmati Rice',        category: 'carbs',     inStock: true,  unit: 'bag',    notes: 'Long grain, green package',             keywords: ['basmati', 'rice'] },
    { name: 'Inked Bread (High Fiber)',   category: 'carbs',     inStock: true,  unit: 'loaf',   notes: 'CHEAT CODE: 10g Fiber, 1g Net Carb',    keywords: ['inked bread', 'bread', 'toast'], isFiber: true },
    { name: 'Sweet Potato',               category: 'carbs',     inStock: true,  unit: 'pieces', notes: '35g carbs per medium',                  keywords: ['sweet potato'], isFiber: true },
    { name: 'Whole Wheat Roti',           category: 'carbs',     inStock: true,  unit: 'pack',   notes: '30g carbs per medium roti',             keywords: ['roti', 'bread'] },

    // ===== FATS / OILS =====
    { name: 'Ghee',                       category: 'fat',       inStock: true,  unit: 'jar',    notes: '14g fat per tbsp',                      keywords: ['ghee'] },
    { name: 'Mixed Nuts (Almonds/Cashews/Walnuts)', category: 'fat', inStock: true, unit: 'bag', notes: '15-20g fat per oz',                     keywords: ['nuts', 'almond', 'cashew', 'walnut', 'mixed nuts'] },
    { name: 'Natural Peanut Butter',      category: 'fat',       inStock: true,  unit: 'jar',    notes: 'No added sugar',                        keywords: ['peanut butter'] },
    { name: 'Olive Oil',                  category: 'fat',       inStock: true,  unit: 'bottle', notes: 'Extra virgin, for salads',              keywords: ['olive oil'] },
    { name: 'Avocado',                    category: 'fat',       inStock: true,  unit: 'pieces', notes: 'For guacamole & salads',                keywords: ['avocado'], isFiber: true },
    { name: 'Whole Flax Seeds',           category: 'fat',       inStock: true,  unit: 'bag',    notes: '2 tbsp daily — Omega-3 anti-inflammatory', keywords: ['flax'], isFiber: true, isAntioxidant: true },
    { name: 'Chia Seeds',                 category: 'fat',       inStock: true,  unit: 'bag',    notes: 'High Omega-3 + Fiber',                  keywords: ['chia'], isFiber: true, isAntioxidant: true },
    { name: 'Pumpkin Seeds',              category: 'fat',       inStock: true,  unit: 'bag',    notes: 'Magnesium + Zinc',                      keywords: ['pumpkin seed'], isAntioxidant: true },

    // ===== VEGETABLES =====
    { name: 'Spinach (Fresh)',            category: 'veggie',    inStock: true,  unit: 'bag',    notes: 'For breakfast, salads, bowls',           keywords: ['spinach'], isFiber: true, isAntioxidant: true },
    { name: 'Tomatoes',                   category: 'veggie',    inStock: true,  unit: 'pieces', notes: 'For salads, curries, omelettes',        keywords: ['tomato'], isAntioxidant: true },
    { name: 'Cucumber',                   category: 'veggie',    inStock: true,  unit: 'pieces', notes: 'For salads & snack sticks',             keywords: ['cucumber'] },
    { name: 'Mushrooms',                  category: 'veggie',    inStock: true,  unit: 'pack',   notes: 'For night salads',                      keywords: ['mushroom'], isFiber: true },
    { name: 'Onions',                     category: 'veggie',    inStock: true,  unit: 'bag',    notes: 'Yellow/white, for curries',             keywords: ['onion'] },
    { name: 'Bell Peppers',              category: 'veggie',    inStock: true,  unit: 'pieces', notes: 'For stir-fry & egg muffins',            keywords: ['bell pepper', 'pepper'], isAntioxidant: true },
    { name: 'Broccoli',                  category: 'veggie',    inStock: true,  unit: 'head',   notes: 'For salmon bowl',                       keywords: ['broccoli'], isFiber: true, isAntioxidant: true },
    { name: 'Frozen Mixed Veggies',       category: 'veggie',    inStock: true,  unit: 'bag',    notes: 'Quick lunch side',                      keywords: ['frozen mixed veggies', 'frozen veggies', 'mixed veggies'], isFiber: true },
    { name: 'Zucchini',                  category: 'veggie',    inStock: true,  unit: 'pieces', notes: 'For stir-fry',                          keywords: ['zucchini'] },
    { name: 'Baby Carrots',              category: 'veggie',    inStock: true,  unit: 'bag',    notes: 'For snacking with hummus',              keywords: ['carrot', 'baby carrot'], isFiber: true },
    { name: 'Green Chilies',             category: 'veggie',    inStock: true,  unit: 'pack',   notes: 'For masala omelette & curries',         keywords: ['green chili'] },
    { name: 'Cilantro',                  category: 'veggie',    inStock: true,  unit: 'bunch',  notes: 'Fresh, for garnish',                    keywords: ['cilantro'], isAntioxidant: true },
    { name: 'Romaine Lettuce',           category: 'veggie',    inStock: true,  unit: 'head',   notes: 'For tandoori salad',                    keywords: ['romaine', 'lettuce'], isFiber: true },
    { name: 'Cherry Tomatoes',           category: 'veggie',    inStock: true,  unit: 'pack',   notes: 'For Mediterranean salad',               keywords: ['cherry tomato'], isAntioxidant: true },
    { name: 'Frozen Peas',              category: 'veggie',    inStock: true,  unit: 'bag',    notes: 'For keema',                             keywords: ['pea', 'frozen peas'], isFiber: true },

    // ===== FRUITS =====
    { name: 'Kiwi',                       category: 'fruit',     inStock: true,  unit: 'pieces', notes: 'Mandatory — Potassium Flush',           keywords: ['kiwi'], isFiber: true, isAntioxidant: true },
    { name: 'Mandarin Oranges',           category: 'fruit',     inStock: true,  unit: 'bag',    notes: 'Afternoon snack',                       keywords: ['mandarin'], isAntioxidant: true },
    { name: 'Banana',                     category: 'fruit',     inStock: true,  unit: 'bunch',  notes: 'For protein shakes',                    keywords: ['banana'] },
    { name: 'Lemon',                      category: 'fruit',     inStock: true,  unit: 'pieces', notes: 'Morning water + salad dressing',        keywords: ['lemon'], isAntioxidant: true },
    { name: 'Apple',                      category: 'fruit',     inStock: true,  unit: 'pieces', notes: 'For snack with PB',                     keywords: ['apple'], isFiber: true },
    { name: 'Frozen Mango Chunks',        category: 'fruit',     inStock: true,  unit: 'bag',    notes: 'For mango protein smoothie',            keywords: ['mango'] },
    { name: 'Frozen Blueberries',         category: 'fruit',     inStock: true,  unit: 'bag',    notes: 'Cheat Code: Super Antioxidant',         keywords: ['blueberry', 'blueberries'], isAntioxidant: true, isFiber: true },
    { name: 'Organic Dates',              category: 'fruit',     inStock: true,  unit: 'box',    notes: 'Natural energy candy',                  keywords: ['date', 'dates'], isFiber: true },

    // ===== DAIRY =====
    { name: 'Plain Greek Yogurt',         category: 'dairy',     inStock: true,  unit: 'tub',    notes: 'For snack, marinades, smoothies',       keywords: ['yogurt', 'greek yogurt'] },
    { name: 'Almond Milk',               category: 'dairy',     inStock: true,  unit: 'carton', notes: 'For protein shakes',                    keywords: ['almond milk'] },
    { name: 'Feta Cheese',               category: 'dairy',     inStock: true,  unit: 'pack',   notes: 'For Mediterranean salad',               keywords: ['feta'] },

    // ===== SPICES & CONDIMENTS =====
    { name: 'Turmeric',                  category: 'spice',     inStock: true,  unit: 'jar',    notes: 'Anti-inflammatory',                     keywords: ['turmeric'], isAntioxidant: true },
    { name: 'Cumin',                     category: 'spice',     inStock: true,  unit: 'jar',    notes: '',                                      keywords: ['cumin'] },
    { name: 'Garam Masala',              category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For goat curry & keema',                keywords: ['garam masala'] },
    { name: 'Tandoori Masala',           category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For chicken tikka & tandoori salad',    keywords: ['tandoori'] },
    { name: 'Tikka Masala Powder',       category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For chicken tikka bowl',                keywords: ['tikka masala'] },
    { name: 'Red Chili Powder',          category: 'spice',     inStock: true,  unit: 'jar',    notes: '',                                      keywords: ['chili powder', 'red chili'] },
    { name: 'Garlic Powder',             category: 'spice',     inStock: true,  unit: 'jar',    notes: '',                                      keywords: ['garlic powder'] },
    { name: 'Paprika',                   category: 'spice',     inStock: true,  unit: 'jar',    notes: '',                                      keywords: ['paprika'] },
    { name: 'Dried Oregano',             category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For salmon & Mediterranean salad',      keywords: ['oregano'] },
    { name: 'Black Pepper',              category: 'spice',     inStock: true,  unit: 'grinder',notes: '',                                      keywords: ['pepper', 'black pepper'] },
    { name: 'Salt',                      category: 'spice',     inStock: true,  unit: 'box',    notes: '',                                      keywords: ['salt'] },
    { name: 'Ginger-Garlic Paste',       category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For curries',                           keywords: ['ginger-garlic', 'ginger', 'garlic paste'] },
    { name: 'Cinnamon',                  category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For yogurt snack',                      keywords: ['cinnamon'] },
    { name: 'Salsa',                     category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For rice bowls',                        keywords: ['salsa'] },
    { name: 'Hummus',                    category: 'spice',     inStock: true,  unit: 'tub',    notes: 'For cucumber snack',                    keywords: ['hummus'] },
    { name: 'Soy Sauce (Low Sodium)',    category: 'spice',     inStock: true,  unit: 'bottle', notes: 'For stir-fry',                          keywords: ['soy sauce'] },
    { name: 'Honey',                     category: 'spice',     inStock: true,  unit: 'bottle', notes: 'Optional for yogurt',                   keywords: ['honey'] },
    { name: 'Guacamole',                 category: 'spice',     inStock: true,  unit: 'tub',    notes: 'For night salads',                      keywords: ['guacamole'], isFiber: true },
    { name: 'Olives',                    category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For Mediterranean salad',               keywords: ['olive'] },
    { name: 'Mint Chutney / Raita',      category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For tikka bowl & tandoori salad',       keywords: ['mint', 'raita', 'chutney'] },
    { name: 'Sesame Seeds',             category: 'spice',     inStock: true,  unit: 'bag',    notes: 'For stir-fry garnish',                  keywords: ['sesame'] },
    { name: 'Mustard',                   category: 'spice',     inStock: true,  unit: 'bottle', notes: 'For egg salad dressing',                keywords: ['mustard'] },
    { name: 'Everything Bagel Seasoning',category: 'spice',     inStock: true,  unit: 'jar',    notes: 'For egg & avocado plate',               keywords: ['bagel seasoning'] },

    // ===== SUPPLEMENTS =====
    { name: 'Centrum Men Multivitamin',   category: 'supplement',inStock: true,  unit: 'bottle', notes: 'Morning with food',                     keywords: ['multivitamin', 'centrum'] },
    { name: 'Vitamin D3 (1000 IU)',       category: 'supplement',inStock: true,  unit: 'bottle', notes: 'Morning with food',                     keywords: ['vitamin d', 'd3'] },
    { name: 'Youtheory Collagen Tablets', category: 'supplement',inStock: true,  unit: 'bottle', notes: '6 tablets at 10:30 AM',                 keywords: ['collagen'] },
    { name: 'Magnesium Softgel (400mg)',  category: 'supplement',inStock: true,  unit: 'bottle', notes: 'Nighttime, muscle recovery',            keywords: ['magnesium'] },
    { name: 'Isabgol (Psyllium Husk)',    category: 'supplement',inStock: true,  unit: 'tub',    notes: 'Daily for Gut Health & Bowel Movement',  keywords: ['isabgol', 'psyllium'], isFiber: true },

    // ===== BONE BROTH & LIQUIDS =====
    { name: 'Chicken Bone Broth',         category: 'other',     inStock: true,  unit: 'carton', notes: 'Liquid Gold — cook rice in this',        keywords: ['bone broth', 'broth'] },
    { name: 'Cooking Spray',              category: 'other',     inStock: true,  unit: 'can',    notes: 'For egg muffins',                       keywords: ['cooking spray'] },
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

// ===== INGREDIENT MATCHING ENGINE =====
// Checks if a recipe can be made with currently in-stock pantry items
function getRecipeAvailability(recipe) {
    const stock = loadPantryStock ? loadPantryStock() : {};
    const missing = [];
    const matched = [];

    // Only check key ingredients (proteins, main carbs, main veggies, dairy, fruits)
    // Skip spices/seasonings as they're rarely the blocker
    const keyCategories = ['protein', 'carbs', 'fat', 'veggie', 'fruit', 'dairy', 'other'];

    for (const ingredientStr of recipe.ingredients) {
        const ingLower = ingredientStr.toLowerCase();

        // Skip very generic items (water, ice, salt, pepper, oil, seasonings, etc.)
        if (/^(water|ice|salt|pepper|pinch|cooking spray)/.test(ingLower) ||
            /seasoning|to taste|optional/.test(ingLower)) {
            continue;
        }

        // Try to match against pantry keywords
        let foundMatch = false;
        for (let i = 0; i < PANTRY.length; i++) {
            const item = PANTRY[i];
            if (!item.keywords) continue;
            // Skip spices for matching — they're rarely the blocking item
            if (item.category === 'spice' || item.category === 'supplement') continue;

            const hasKeyword = item.keywords.some(kw => ingLower.includes(kw));
            if (hasKeyword) {
                foundMatch = true;
                const isInStock = stock[i] !== false;
                if (isInStock) {
                    matched.push(item.name);
                } else {
                    missing.push(item.name);
                }
                break;
            }
        }
    }

    return {
        canMake: missing.length === 0,
        missing,
        matched,
        missingCount: missing.length
    };
}
