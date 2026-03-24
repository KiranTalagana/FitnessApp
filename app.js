/* ======================================================
   Kiran's Total Fitness Blueprint — App Logic V3
   Multi-Recipe Edition
   ====================================================== */

// ===== DATA =====
const SCHEDULE = [
    {
        time: '7:00 AM', label: 'Hydrate',
        instruction: '500ml Water + Lemon squeeze.',
        recipes: []
    },
    {
        time: '8:00 AM', label: 'Breakfast',
        instruction: 'High-Protein/High-Fat breakfast to prevent daytime sleepiness. Take Multivitamin + D3.',
        recipes: [
            {
                name: 'Spinach Egg Scramble',
                ingredients: ['3 whole eggs', '1 cup fresh spinach', '1 tbsp ghee', '¼ tsp turmeric', 'Salt & pepper to taste'],
                steps: [
                    'Heat ghee in a non-stick pan over medium heat.',
                    'Add spinach and sauté for 1–2 minutes until wilted.',
                    'Crack eggs directly into the pan, add turmeric.',
                    'Scramble until eggs are fully cooked (2–3 min).',
                    'Take Centrum Multivitamin + Vitamin D3 with the meal.'
                ],
                macros: { protein: '21g', carbs: '2g', fat: '18g', calories: '~260' }
            },
            {
                name: 'Masala Omelette',
                ingredients: ['3 whole eggs', '¼ onion (diced)', '1 small tomato (diced)', '1 green chili (minced)', '2 tbsp cilantro', '1 tbsp ghee', '¼ tsp cumin', '¼ tsp red chili powder', 'Salt to taste'],
                steps: [
                    'Beat eggs with cumin, chili powder, and salt.',
                    'Heat ghee in a pan over medium heat.',
                    'Sauté onion for 1 min, add tomato and green chili, cook 1 min.',
                    'Pour egg mixture over the veggies, cover and cook 2–3 min.',
                    'Flip, cook 1 more minute. Top with cilantro.'
                ],
                macros: { protein: '20g', carbs: '6g', fat: '18g', calories: '~275' }
            },
            {
                name: 'Egg & Avocado Plate',
                ingredients: ['3 eggs (2 whole + 1 white)', '½ avocado (sliced)', '1 cup spinach', '1 tbsp flax seeds', 'Pinch of everything bagel seasoning', 'Salt & pepper'],
                steps: [
                    'Fry or poach eggs to your preference in a non-stick pan.',
                    'Arrange spinach on a plate, top with avocado slices.',
                    'Place eggs on top, sprinkle flax seeds and seasoning.',
                    'Season with salt and pepper.'
                ],
                macros: { protein: '22g', carbs: '8g', fat: '22g', calories: '~320' }
            },
            {
                name: 'Veggie Egg Muffins (Meal Prep)',
                ingredients: ['6 eggs', '1 cup spinach (chopped)', '¼ cup mushrooms (diced)', '¼ cup bell pepper (diced)', '¼ cup onion (diced)', '½ tsp garlic powder', 'Salt & pepper', 'Cooking spray'],
                steps: [
                    'Preheat oven to 375°F. Spray a muffin tin with cooking spray.',
                    'Whisk eggs with garlic powder, salt, and pepper.',
                    'Divide veggies evenly into 6 muffin cups.',
                    'Pour egg mixture over veggies, fill ¾ full.',
                    'Bake 20–22 min until set. Makes 6 muffins (eat 3 per serving).',
                    'Store remaining 3 in fridge for next day.'
                ],
                macros: { protein: '18g', carbs: '4g', fat: '14g', calories: '~215 (3 muffins)' }
            }
        ]
    },
    {
        time: '10:30 AM', label: 'Focus Fuel',
        instruction: 'Protein shake + 6 Collagen tablets + fruit. Potassium flush (Kiwi).',
        recipes: [
            {
                name: 'Classic Whey + Kiwi',
                ingredients: ['1 scoop whey protein', '200ml cold water or almond milk', '1 kiwi (peeled)', '6 Youtheory Collagen tablets'],
                steps: [
                    'Add whey protein and liquid to a shaker bottle.',
                    'Shake vigorously for 30 seconds.',
                    'Take 6 collagen tablets with the shake.',
                    'Eat the kiwi on the side (Potassium Flush).'
                ],
                macros: { protein: '24g', carbs: '12g', fat: '2g', calories: '~170' }
            },
            {
                name: 'Banana Peanut Butter Shake',
                ingredients: ['1 scoop whey protein (chocolate or vanilla)', '1 small banana', '1 tbsp natural peanut butter', '200ml almond milk', 'Ice cubes', '6 Youtheory Collagen tablets'],
                steps: [
                    'Blend whey, banana, peanut butter, almond milk, and ice until smooth.',
                    'Take 6 collagen tablets alongside the shake.',
                    'Eat 1 kiwi on the side for Potassium Flush.'
                ],
                macros: { protein: '30g', carbs: '28g', fat: '10g', calories: '~320' }
            },
            {
                name: 'Mango Protein Smoothie',
                ingredients: ['1 scoop whey protein (vanilla)', '½ cup frozen mango chunks', '½ cup Greek yogurt', '150ml water', 'Ice cubes', '6 Youtheory Collagen tablets'],
                steps: [
                    'Blend whey, mango, yogurt, water, and ice until creamy.',
                    'Pour into a glass. Take 6 collagen tablets with it.',
                    'Eat 1 kiwi separately for Potassium Flush.'
                ],
                macros: { protein: '32g', carbs: '22g', fat: '3g', calories: '~250' }
            }
        ]
    },
    {
        time: '1:00 PM', label: 'Lunch',
        instruction: 'Main meal — protein + Daawat Basmati Rice (cooked in Bone Broth) + veggies.',
        recipes: [
            {
                name: 'Bone Broth Basmati Bowl',
                ingredients: ['5-6 oz chicken thighs (boneless)', '1 cup Daawat Basmati rice', '1 cup chicken bone broth', '2 cups frozen mixed veggies', '2 tbsp salsa', '1 tsp cumin', '½ tsp garlic powder', 'Salt to taste'],
                steps: [
                    'Rinse Basmati rice. Cook in bone broth instead of water (Liquid Gold Hack — adds 11g protein).',
                    'Season chicken with cumin, garlic powder, and salt.',
                    'Cook chicken in a pan until 165°F internal (8–10 min). Slice.',
                    'Steam or microwave frozen veggies for 3–4 min.',
                    'Bowl: rice → veggies → sliced chicken → salsa on top.'
                ],
                macros: { protein: '45g', carbs: '52g', fat: '12g', calories: '~500' }
            },
            {
                name: 'Goat Curry with Basmati',
                ingredients: ['5 oz goat meat (bone-in or boneless)', '1 cup Daawat Basmati rice', '1 cup bone broth', '1 small onion (sliced)', '2 tomatoes (puréed)', '1 tbsp ginger-garlic paste', '1 tsp garam masala', '½ tsp turmeric', '½ tsp red chili powder', '1 tbsp oil', 'Fresh cilantro', 'Salt to taste'],
                steps: [
                    'Heat oil, sauté onion until golden (5 min).',
                    'Add ginger-garlic paste, cook 1 min.',
                    'Add tomato purée, turmeric, chili powder, salt. Cook 5 min.',
                    'Add goat meat, stir to coat. Add ½ cup water, cover and simmer 40–50 min until tender.',
                    'Add garam masala, garnish with cilantro.',
                    'Cook Basmati rice in bone broth. Serve curry over rice.'
                ],
                macros: { protein: '42g', carbs: '50g', fat: '15g', calories: '~510' }
            },
            {
                name: 'Chicken Tikka Rice Bowl',
                ingredients: ['6 oz chicken breast (cubed)', '2 tbsp plain yogurt', '1 tsp tikka masala powder', '½ tsp turmeric', '½ tsp paprika', '1 cup Daawat Basmati rice', '1 cup bone broth', '½ cucumber (diced)', '1 tomato (diced)', '2 tbsp mint chutney or raita', 'Lemon wedge'],
                steps: [
                    'Marinate chicken in yogurt, tikka masala, turmeric, and paprika for 15+ min.',
                    'Cook chicken on a hot pan or grill until charred and cooked through (6–8 min).',
                    'Cook Basmati rice in bone broth.',
                    'Bowl: rice → chicken tikka → cucumber → tomato.',
                    'Top with mint chutney/raita. Squeeze lemon.'
                ],
                macros: { protein: '48g', carbs: '50g', fat: '8g', calories: '~470' }
            },
            {
                name: 'Lemon Herb Salmon with Basmati',
                ingredients: ['5 oz salmon fillet', '1 cup Daawat Basmati rice', '1 cup bone broth', '1 cup broccoli florets', '1 tbsp olive oil', '2 cloves garlic (minced)', 'Juice of ½ lemon', '1 tsp dried oregano', 'Salt & pepper'],
                steps: [
                    'Season salmon with olive oil, garlic, lemon juice, oregano, salt, and pepper.',
                    'Bake at 400°F for 12–15 min or pan-sear 4 min per side.',
                    'Steam broccoli for 3–4 min.',
                    'Cook Basmati rice in bone broth.',
                    'Plate: rice, broccoli, and salmon. Drizzle any remaining lemon juice.'
                ],
                macros: { protein: '38g', carbs: '48g', fat: '16g', calories: '~490' }
            },
            {
                name: 'Chickpea & Chicken Stir-Fry',
                ingredients: ['4 oz chicken breast (sliced)', '½ cup canned chickpeas (drained)', '1 cup Daawat Basmati rice', '1 cup bone broth', '1 cup bell pepper (sliced)', '½ cup zucchini (sliced)', '1 tbsp soy sauce (low sodium)', '1 tsp ginger (grated)', '1 tbsp oil', 'Sesame seeds'],
                steps: [
                    'Cook Basmati rice in bone broth.',
                    'Heat oil in a wok. Stir-fry chicken 4–5 min until cooked.',
                    'Add bell pepper, zucchini, ginger. Stir-fry 3 min.',
                    'Add chickpeas and soy sauce. Toss for 2 min.',
                    'Serve over rice. Sprinkle sesame seeds.'
                ],
                macros: { protein: '40g', carbs: '55g', fat: '12g', calories: '~490' }
            },
            {
                name: 'Lamb Keema with Basmati',
                ingredients: ['5 oz ground lamb', '1 cup Daawat Basmati rice', '1 cup bone broth', '1 small onion (diced)', '1 tomato (diced)', '½ cup peas (frozen)', '1 tbsp ginger-garlic paste', '1 tsp cumin', '½ tsp garam masala', '½ tsp turmeric', '1 tbsp oil', 'Cilantro'],
                steps: [
                    'Heat oil, sauté onion until soft (3 min).',
                    'Add ginger-garlic paste, cumin, turmeric. Cook 1 min.',
                    'Add ground lamb, break apart and cook 5–6 min until browned.',
                    'Add tomato and peas. Simmer 8–10 min.',
                    'Finish with garam masala and cilantro. Serve over bone broth rice.'
                ],
                macros: { protein: '38g', carbs: '50g', fat: '18g', calories: '~520' }
            }
        ]
    },
    {
        time: '4:00 PM', label: 'Snack',
        instruction: 'Light energy snack — no heavy carbs before gym.',
        recipes: [
            {
                name: 'Mixed Nuts + Mandarin',
                ingredients: ['¼ cup mixed nuts (almonds, cashews, walnuts)', '1 mandarin orange'],
                steps: [
                    'Portion ¼ cup of mixed nuts into a small container.',
                    'Peel the mandarin.',
                    'Eat slowly — last energy boost before gym.'
                ],
                macros: { protein: '5g', carbs: '14g', fat: '16g', calories: '~210' }
            },
            {
                name: 'Greek Yogurt & Almonds',
                ingredients: ['¾ cup plain Greek yogurt', '10 almonds', '½ tsp honey (optional)', 'Pinch of cinnamon'],
                steps: [
                    'Scoop yogurt into a bowl.',
                    'Top with almonds, drizzle honey, and sprinkle cinnamon.',
                    'Eat 1.5–2 hours before gym for sustained energy.'
                ],
                macros: { protein: '15g', carbs: '10g', fat: '10g', calories: '~190' }
            },
            {
                name: 'Hummus & Cucumber Sticks',
                ingredients: ['3 tbsp hummus', '1 medium cucumber (cut into sticks)', '5 baby carrots', 'Sprinkle of paprika'],
                steps: [
                    'Slice cucumber into sticks.',
                    'Arrange with baby carrots on a plate.',
                    'Scoop hummus into a small bowl, dust with paprika.',
                    'Dip and eat.'
                ],
                macros: { protein: '5g', carbs: '14g', fat: '6g', calories: '~130' }
            },
            {
                name: 'Apple Slices with Peanut Butter',
                ingredients: ['1 medium apple (sliced)', '1 tbsp natural peanut butter'],
                steps: [
                    'Wash and slice the apple.',
                    'Spread or dip slices into peanut butter.',
                    'Great for slow-releasing energy before the gym.'
                ],
                macros: { protein: '4g', carbs: '28g', fat: '8g', calories: '~200' }
            }
        ]
    },
    {
        time: '6:00 PM', label: 'GYM',
        instruction: 'Execute today\'s workout split — Focus on 15-20 rep range.',
        recipes: []
    },
    {
        time: '8:30 PM', label: 'Night Salad',
        instruction: 'High-volume salad with lean protein. Minimal carbs — keeps stomach flat by morning.',
        recipes: [
            {
                name: 'Anti-Inflammatory Power Salad',
                ingredients: ['2 cups fresh spinach', '½ cucumber (sliced)', '1 medium tomato (diced)', '½ cup mushrooms (sliced)', '4 oz grilled chicken breast', '2 tbsp guacamole', '2 tbsp whole flax seeds', '1 tbsp lemon juice', 'Black pepper'],
                steps: [
                    'Arrange spinach as the base in a large bowl.',
                    'Top with cucumber, tomato, and mushrooms.',
                    'Slice grilled chicken and lay on top.',
                    'Add guacamole and sprinkle flax seeds.',
                    'Drizzle lemon juice and add pepper. NO extra carbs.'
                ],
                macros: { protein: '32g', carbs: '15g', fat: '18g', calories: '~350' }
            },
            {
                name: 'Mediterranean Chicken Salad',
                ingredients: ['4 oz grilled chicken breast', '2 cups mixed greens', '½ cucumber (diced)', '10 cherry tomatoes (halved)', '2 tbsp feta cheese (crumbled)', '5 olives (sliced)', '1 tbsp olive oil', '1 tbsp lemon juice', '½ tsp dried oregano', '2 tbsp flax seeds'],
                steps: [
                    'Grill or pan-sear chicken, let rest and slice.',
                    'Toss greens, cucumber, tomatoes, olives in a bowl.',
                    'Top with sliced chicken and crumbled feta.',
                    'Whisk olive oil, lemon juice, oregano for dressing.',
                    'Drizzle dressing and sprinkle flax seeds.'
                ],
                macros: { protein: '35g', carbs: '12g', fat: '20g', calories: '~370' }
            },
            {
                name: 'Tandoori Chicken Salad',
                ingredients: ['4 oz chicken breast', '1 tbsp plain yogurt', '1 tsp tandoori masala', '2 cups romaine lettuce (chopped)', '½ cucumber (diced)', '1 tomato (diced)', '¼ red onion (thinly sliced)', '2 tbsp mint-yogurt raita', '2 tbsp flax seeds', 'Lemon wedge'],
                steps: [
                    'Marinate chicken in yogurt and tandoori masala (15+ min).',
                    'Grill or pan-sear until charred and cooked through (6–8 min).',
                    'Arrange romaine, cucumber, tomato, and onion in a bowl.',
                    'Slice tandoori chicken on top.',
                    'Drizzle raita, sprinkle flax seeds, squeeze lemon.'
                ],
                macros: { protein: '33g', carbs: '10g', fat: '8g', calories: '~250' }
            },
            {
                name: 'Salmon & Avocado Salad',
                ingredients: ['4 oz baked or grilled salmon', '2 cups mixed greens', '½ avocado (sliced)', '½ cucumber (sliced)', '6 cherry tomatoes', '2 tbsp flax seeds', '1 tbsp olive oil', '1 tbsp lemon juice', 'Salt & pepper'],
                steps: [
                    'Bake salmon at 400°F for 12 min or pan-sear 4 min/side.',
                    'Arrange greens, cucumber, and tomatoes in a bowl.',
                    'Top with flaked salmon and avocado slices.',
                    'Drizzle olive oil + lemon juice. Add flax seeds.',
                    'Season with salt and pepper.'
                ],
                macros: { protein: '30g', carbs: '12g', fat: '26g', calories: '~400' }
            },
            {
                name: 'Egg & Veggie Salad',
                ingredients: ['3 hard-boiled eggs', '2 cups spinach', '½ cucumber (sliced)', '1 tomato (diced)', '¼ cup chickpeas (drained)', '2 tbsp flax seeds', '1 tbsp olive oil', '1 tsp mustard', '1 tbsp lemon juice', 'Salt & pepper'],
                steps: [
                    'Hard boil eggs (10 min), peel and halve.',
                    'Arrange spinach, cucumber, tomato, and chickpeas in a bowl.',
                    'Place egg halves on top.',
                    'Whisk olive oil, mustard, lemon juice for dressing.',
                    'Drizzle dressing, add flax seeds, season.'
                ],
                macros: { protein: '24g', carbs: '18g', fat: '22g', calories: '~365' }
            }
        ]
    },
    {
        time: '10:00 PM', label: 'Recover',
        instruction: '1 Magnesium Softgel (400mg) + warm water.',
        recipes: []
    },
];

const WORKOUTS = [
    {
        day: 1, name: 'Push (Chest & Triceps)', label: 'Day 1',
        exercises: [
            { name: 'Dumbbell Chest Press', sets: '3 × 20' },
            { name: 'Dumbbell Incline Press', sets: '3 × 15' },
            { name: 'Decline Barbell Press', sets: '3 × 15' },
            { name: 'Chest Fly', sets: '3 × 15' },
            { name: 'Overhead Tricep Extension', sets: '3 × 15' },
            { name: 'Rope Tricep Extension', sets: '3 × 15' },
            { name: 'Tricep Dips', sets: '3 × 20' },
        ]
    },
    {
        day: 2, name: 'Pull (Back & Biceps)', label: 'Day 2',
        exercises: [
            { name: 'Lat Pull-Down', sets: '3 × 15-20' },
            { name: 'Bent Over Barbell Row', sets: '3 × 15' },
            { name: 'Seated Row', sets: '3 × 15-18' },
            { name: 'Back Extension', sets: '3 × 15-20' },
            { name: 'Alternating Dumbbell Curl', sets: '3 × 20' },
            { name: 'Preacher Curl', sets: '3 × 15' },
            { name: 'Alternate Hammer Curl', sets: '3 × 20' },
        ]
    },
    {
        day: 3, name: 'Legs', label: 'Day 3',
        exercises: [
            { name: 'Squats', sets: '4 × 15' },
            { name: 'Leg Press', sets: '3 × 20' },
            { name: 'Leg Extension', sets: '3 × 15' },
            { name: 'Leg Curl', sets: '3 × 15' },
            { name: 'Lunges', sets: '3 × 20' },
            { name: 'Calf Raises', sets: '4 × 20' },
            { name: 'Sumo Squats', sets: '3 × 20' },
            { name: 'Hip Thrust', sets: '3 × 15-20' },
        ]
    },
    {
        day: 4, name: 'Shoulders & Abs', label: 'Day 4',
        exercises: [
            { name: 'Shoulder Press', sets: '3 × 15' },
            { name: 'Lateral Raises', sets: '3 × 15' },
            { name: 'Front Raise', sets: '3 × 15' },
            { name: 'Reverse Fly', sets: '3 × 20' },
            { name: 'Cable Face Pull', sets: '3 × 15' },
            { name: 'Dumbbell Shrug', sets: '4 × 15' },
            { name: 'Planks', sets: '3 × 30-60s' },
            { name: 'Mountain Climbers', sets: '3 × 20' },
            { name: 'Russian Twists', sets: '3 × 10-12' },
        ]
    },
    {
        day: 5, name: 'Cardio', label: 'Day 5',
        subtitle: 'Repeat Circuit 3-5 Times',
        exercises: [
            { name: 'Jumping Jacks', sets: '100 reps' },
            { name: 'High Knees', sets: '30 sec' },
            { name: 'Plank w/ Shoulder Taps', sets: '30 sec' },
            { name: 'Jump Squats', sets: '20 reps' },
            { name: 'Burpees with Push-Up', sets: '15 reps' },
            { name: 'Bicycle Crunches', sets: '20/side' },
        ]
    },
    {
        day: 6, name: 'Arms', label: 'Day 6',
        exercises: [
            { name: 'Bench Dips', sets: '3 × 10-12' },
            { name: 'Barbell Curls', sets: '3 × 10-12' },
            { name: 'Hammer Curls', sets: '3 × 10-12' },
            { name: 'Tricep Extensions', sets: '3 × 10-15' },
            { name: 'Cable Crossovers', sets: '3 × 10-12' },
            { name: 'Bench Dips (Burnout)', sets: '3 × 10-12' },
        ]
    },
];

// ===== USER PROFILE =====
const DEFAULT_PROFILE = {
    name: 'Kiran Talagana',
    weight: 71.2,
    height: 162.56,
    age: 25,
    gender: 'male'
};

function loadProfile() {
    const saved = localStorage.getItem('kiran_profile');
    if (saved) return JSON.parse(saved);
    return { ...DEFAULT_PROFILE };
}

function saveProfile(profile) {
    localStorage.setItem('kiran_profile', JSON.stringify(profile));
}

// ===== CALCULATORS =====

function calcBMI(weightKg, heightCm) {
    const heightM = heightCm / 100;
    return weightKg / (heightM * heightM);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return { label: 'Underweight', color: '#60a5fa' };
    if (bmi < 25)   return { label: 'Normal', color: '#22c55e' };
    if (bmi < 30)   return { label: 'Overweight', color: '#f59e0b' };
    return { label: 'Obese', color: '#ef4444' };
}

function calcBMR(weightKg, heightCm, age, gender) {
    if (gender === 'male') {
        return 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * age);
    }
    return 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * age);
}

function calcTDEE(bmr, activityLevel) {
    const multipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        very_active: 1.9
    };
    return bmr * (multipliers[activityLevel] || 1.55);
}

function calcMacros(weightKg) {
    return {
        protein: { min: Math.round(weightKg * 1.6), max: Math.round(weightKg * 2.2) },
        carbs: { min: Math.round(weightKg * 1), max: Math.round(weightKg * 2) },
        fat: { min: Math.round(weightKg * 0.5), max: Math.round(weightKg * 1) }
    };
}

// ===== HELPERS =====
function todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function weekKey() {
    const d = new Date();
    const jan1 = new Date(d.getFullYear(), 0, 1);
    const weekNum = Math.ceil(((d - jan1) / 86400000 + jan1.getDay() + 1) / 7);
    return `${d.getFullYear()}-W${weekNum}`;
}

function getDayOfWeek() { return new Date().getDay(); }

function getWorkoutForToday() {
    const dow = getDayOfWeek();
    if (dow === 0) return null;
    if (dow <= 6) return WORKOUTS[dow - 1];
    return null;
}

function formatDate() {
    return new Date().toLocaleDateString('en-US', {
        weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
    });
}

function getGreeting() {
    const h = new Date().getHours();
    if (h < 12) return 'Good Morning, Kiran 💪';
    if (h < 17) return 'Good Afternoon, Kiran 🔥';
    return 'Good Evening, Kiran 🌙';
}

// ===== STATE =====
function loadChecklist() {
    const key = `kiran_checklist_${todayKey()}`;
    const saved = localStorage.getItem(key);
    if (saved) return JSON.parse(saved);
    return new Array(SCHEDULE.length).fill(false);
}

function saveChecklist(state) {
    const key = `kiran_checklist_${todayKey()}`;
    localStorage.setItem(key, JSON.stringify(state));
}

function loadSodium() {
    const key = `kiran_sodium_${weekKey()}`;
    const saved = localStorage.getItem(key);
    if (saved) return JSON.parse(saved);
    return [false, false];
}

function saveSodium(state) {
    const key = `kiran_sodium_${weekKey()}`;
    localStorage.setItem(key, JSON.stringify(state));
}

function getStreak() {
    let streak = 0;
    const d = new Date();
    d.setDate(d.getDate() - 1);
    while (true) {
        const key = `kiran_checklist_${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
        const saved = localStorage.getItem(key);
        if (saved) {
            const arr = JSON.parse(saved);
            if (arr.filter(Boolean).length >= 6) {
                streak++;
                d.setDate(d.getDate() - 1);
            } else break;
        } else break;
    }
    if (loadChecklist().filter(Boolean).length >= 6) streak++;
    return streak;
}

// ===== SVG GRADIENT =====
function injectSVGGradient() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '0');
    svg.setAttribute('height', '0');
    svg.style.position = 'absolute';
    svg.innerHTML = `<defs><linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#38bdf8"/><stop offset="100%" stop-color="#818cf8"/></linearGradient></defs>`;
    document.body.prepend(svg);
}

// ===== RENDER FUNCTIONS =====

function renderHeader() {
    document.getElementById('header-date').textContent = formatDate();
    document.getElementById('streak-count').textContent = getStreak();
}

function renderDashboard() {
    const profile = loadProfile();
    const macros = calcMacros(profile.weight);

    document.getElementById('greeting-text').textContent = getGreeting();

    const state = loadChecklist();
    const done = state.filter(Boolean).length;
    const total = state.length;
    const pct = Math.round((done / total) * 100);

    document.getElementById('progress-percent').textContent = `${pct}%`;
    document.getElementById('progress-label').textContent = `${done} of ${total} tasks`;

    const circle = document.getElementById('progress-ring-fill');
    const circumference = 2 * Math.PI * 52;
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference - (pct / 100) * circumference;

    const workout = getWorkoutForToday();
    const nameEl = document.getElementById('dash-workout-name');
    const focusEl = document.getElementById('dash-workout-focus');
    if (workout) {
        nameEl.textContent = `${workout.label}: ${workout.name}`;
        focusEl.textContent = workout.exercises.map(e => e.name).join(' · ');
    } else {
        nameEl.textContent = 'Rest Day 😴';
        focusEl.textContent = 'Recovery & mobility work';
    }

    document.getElementById('macro-protein-val').textContent = `${macros.protein.min}–${macros.protein.max}g`;
    document.getElementById('macro-carb-val').textContent = `${macros.carbs.min}–${macros.carbs.max}g`;
    document.getElementById('macro-fat-val').textContent = `${macros.fat.min}–${macros.fat.max}g`;

    const bmi = calcBMI(profile.weight, profile.height);
    const bmiCat = getBMICategory(bmi);
    document.getElementById('bmi-value').textContent = bmi.toFixed(1);
    document.getElementById('bmi-category').textContent = bmiCat.label;
    document.getElementById('bmi-category').style.color = bmiCat.color;

    const bmr = calcBMR(profile.weight, profile.height, profile.age, profile.gender);
    const tdee = calcTDEE(bmr, 'active');
    document.getElementById('bmr-value').textContent = `${Math.round(bmr)}`;
    document.getElementById('tdee-value').textContent = `${Math.round(tdee)}`;

    document.getElementById('weight-display').textContent = `${profile.weight} kg`;
    document.getElementById('weight-input').value = profile.weight;
    document.getElementById('age-input').value = profile.age;
}

function renderSchedule() {
    const list = document.getElementById('schedule-list');
    const state = loadChecklist();
    document.getElementById('daily-date-label').textContent = formatDate();

    list.innerHTML = SCHEDULE.map((item, i) => {
        const hasRecipes = item.recipes && item.recipes.length > 0;
        return `
        <div class="schedule-item ${state[i] ? 'checked' : ''}" data-index="${i}" id="sched-item-${i}">
            <div class="sched-check">✓</div>
            <div class="sched-content">
                <div class="sched-time">${item.time}</div>
                <div class="sched-title">${item.label}</div>
                <div class="sched-instruction">${item.instruction}</div>
                ${hasRecipes ? `
                <div class="recipe-btn-row">
                    ${item.recipes.map((r, ri) => `
                        <button class="recipe-toggle-btn" data-sched="${i}" data-recipe="${ri}" onclick="event.stopPropagation()">
                            🍳 Recipe ${ri + 1}
                        </button>
                    `).join('')}
                </div>
                ${item.recipes.map((r, ri) => `
                <div class="recipe-panel" id="recipe-panel-${i}-${ri}">
                    <div class="recipe-header">
                        <h4 class="recipe-name">${r.name}</h4>
                        <div class="recipe-macros-mini">
                            <span class="rm protein-rm">P: ${r.macros.protein}</span>
                            <span class="rm carb-rm">C: ${r.macros.carbs}</span>
                            <span class="rm fat-rm">F: ${r.macros.fat}</span>
                            <span class="rm cal-rm">${r.macros.calories}</span>
                        </div>
                    </div>
                    <div class="recipe-body">
                        <div class="recipe-col">
                            <h5>Ingredients</h5>
                            <ul>${r.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
                        </div>
                        <div class="recipe-col">
                            <h5>Steps</h5>
                            <ol>${r.steps.map(s => `<li>${s}</li>`).join('')}</ol>
                        </div>
                    </div>
                </div>
                `).join('')}
                ` : ''}
            </div>
        </div>
        `;
    }).join('');

    // Check handlers
    list.querySelectorAll('.schedule-item').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target.closest('.recipe-toggle-btn') || e.target.closest('.recipe-panel')) return;
            const idx = parseInt(el.dataset.index);
            const current = loadChecklist();
            current[idx] = !current[idx];
            saveChecklist(current);
            el.classList.toggle('checked');
            renderDashboard();
            renderHeader();
        });
    });

    // Recipe toggle handlers
    list.querySelectorAll('.recipe-toggle-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const si = btn.dataset.sched;
            const ri = btn.dataset.recipe;
            const panel = document.getElementById(`recipe-panel-${si}-${ri}`);
            const isOpen = panel.classList.contains('open');

            // Close all panels first
            document.querySelectorAll('.recipe-panel.open').forEach(p => p.classList.remove('open'));
            document.querySelectorAll('.recipe-toggle-btn.active').forEach(b => b.classList.remove('active'));

            if (!isOpen) {
                panel.classList.add('open');
                btn.classList.add('active');
            }
        });
    });
}

function renderWorkouts() {
    const grid = document.getElementById('workout-grid');
    const dow = getDayOfWeek();

    grid.innerHTML = WORKOUTS.map(w => {
        const isToday = w.day === dow;
        return `
            <div class="workout-day-card ${isToday ? 'today' : ''}" id="workout-card-${w.day}">
                <div class="workout-day-header">
                    <div>
                        <div class="workout-day-label">${w.label}</div>
                        <div class="workout-day-name">${w.name}</div>
                        ${w.subtitle ? `<div class="workout-day-subtitle">${w.subtitle}</div>` : ''}
                    </div>
                    ${isToday ? '<span class="today-badge">Today</span>' : ''}
                </div>
                <div class="workout-day-body">
                    <ul class="exercise-list">
                        ${w.exercises.map(e => `
                            <li class="exercise-item">
                                <span class="exercise-name">${e.name}</span>
                                <span class="exercise-sets">${e.sets}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }).join('');
}

function renderSodium() {
    const state = loadSodium();
    state.forEach((used, i) => {
        const btn = document.getElementById(`sodium-btn-${i + 1}`);
        if (btn) {
            btn.classList.toggle('used', used);
            btn.addEventListener('click', () => {
                const current = loadSodium();
                current[i] = !current[i];
                saveSodium(current);
                btn.classList.toggle('used');
                updateSodiumLabel();
            });
        }
    });
    updateSodiumLabel();
}

function updateSodiumLabel() {
    const state = loadSodium();
    const used = state.filter(Boolean).length;
    const remaining = 2 - used;
    document.getElementById('sodium-remaining').textContent =
        remaining === 0 ? 'Sodium limit reached for this week!' :
        `${remaining} serving${remaining > 1 ? 's' : ''} remaining this week`;
}

function renderNutritionMacros() {
    const profile = loadProfile();
    const macros = calcMacros(profile.weight);

    document.getElementById('nut-weight-display').textContent = `${profile.weight} kg`;
    document.getElementById('nut-protein-range').textContent = `${macros.protein.min}g – ${macros.protein.max}g / day`;
    document.getElementById('nut-protein-ratio').textContent = `1.6–2.2 g/kg × ${profile.weight} kg`;
    document.getElementById('nut-carb-range').textContent = `${macros.carbs.min}g – ${macros.carbs.max}g / day`;
    document.getElementById('nut-carb-ratio').textContent = `1–2 g/kg × ${profile.weight} kg`;
    document.getElementById('nut-fat-range').textContent = `${macros.fat.min}g – ${macros.fat.max}g / day`;
    document.getElementById('nut-fat-ratio').textContent = `0.5–1 g/kg × ${profile.weight} kg`;
}

// ===== WEIGHT UPDATE =====
function initWeightEditor() {
    const editBtn = document.getElementById('weight-edit-btn');
    const modal = document.getElementById('weight-modal');
    const cancelBtn = document.getElementById('weight-cancel');
    const saveBtn = document.getElementById('weight-save');

    editBtn.addEventListener('click', () => {
        const profile = loadProfile();
        document.getElementById('weight-input').value = profile.weight;
        document.getElementById('age-input').value = profile.age;
        modal.classList.add('open');
    });

    cancelBtn.addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });

    saveBtn.addEventListener('click', () => {
        const profile = loadProfile();
        const newWeight = parseFloat(document.getElementById('weight-input').value);
        const newAge = parseInt(document.getElementById('age-input').value);
        if (!isNaN(newWeight) && newWeight > 0) profile.weight = newWeight;
        if (!isNaN(newAge) && newAge > 0) profile.age = newAge;
        saveProfile(profile);
        modal.classList.remove('open');
        renderDashboard();
        renderNutritionMacros();
    });
}

// ===== NAVIGATION =====
function initNav() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.view;
            navBtns.forEach(b => b.classList.remove('active'));
            views.forEach(v => v.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`view-${target}`).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('kiran_profile')) saveProfile(DEFAULT_PROFILE);
    injectSVGGradient();
    initNav();
    initWeightEditor();
    renderHeader();
    renderDashboard();
    renderSchedule();
    renderWorkouts();
    renderSodium();
    renderNutritionMacros();
});
