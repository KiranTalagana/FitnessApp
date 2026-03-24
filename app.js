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
        instruction: 'High-Protein/High-Fat to prevent sleepiness. Take Multivitamin + D3.',
        recipes: [
            {
                name: 'Cheat Code Breakfast Toast',
                ingredients: ['2 slices Inked Bread (High Fiber)', '2 whole eggs', '½ avocado (sliced)', 'Pinch of red chili powder', 'Salt'],
                steps: [
                    'Toast Inked Bread (10g fiber per slice).',
                    'Fry or poach eggs in a non-stick pan.',
                    'Mash avocado on toast, top with eggs.',
                    'Sprinkle chili powder and salt. **Total Fiber: 22g+**',
                    'Take Multivitamin + Vitamin D3 with the meal.'
                ],
                macros: { protein: '22g', carbs: '2g net', fat: '24g', calories: '~380' },
                isFiber: true
            },
            {
                name: 'Spinach Egg Scramble',
                ingredients: ['3 whole eggs', '1 cup fresh spinach', '1 tbsp ghee', '¼ tsp turmeric', 'Salt & pepper'],
                steps: [
                    'Heat ghee, wilt spinach (1–2 min).',
                    'Scramble with eggs and turmeric.',
                    'Take Multivitamin + Vitamin D3 with the meal.'
                ],
                macros: { protein: '21g', carbs: '2g', fat: '18g', calories: '~260' }
            },
            {
                name: 'Egg & Avocado Plate',
                ingredients: ['3 eggs (2 whole + 1 white)', '½ avocado (sliced)', '1 cup spinach', '1 tbsp flax seeds', 'Bagel seasoning'],
                steps: [
                    'Fry eggs, serve over fresh spinach and avocado.',
                    'Sprinkle flax seeds for Omega-3 and Fiber.',
                    'Take Multivitamin + Vitamin D3 with the meal.'
                ],
                macros: { protein: '22g', carbs: '8g', fat: '22g', calories: '~320' },
                isFiber: true
            }
        ]
    },
    {
        time: '10:30 AM', label: 'Focus Fuel',
        instruction: 'Protein shake + 6 Collagen tablets + fruit. Potassium flush (Kiwi).',
        recipes: [
            {
                name: 'Antioxidant Power Smoothie',
                ingredients: ['1 scoop whey protein', '½ cup frozen blueberries', '1 tbsp chia seeds', '1 tbsp flax seeds', '150ml almond milk', 'Ice', '6 Collagen tablets'],
                steps: [
                    'Blend whey, blueberries, seeds, and almond milk.',
                    'Take 6 collagen tablets with the smoothie.',
                    'Eat 1 kiwi on the side (Potassium Flush).'
                ],
                macros: { protein: '28g', carbs: '18g', fat: '12g', calories: '~310' },
                isAntioxidant: true, isFiber: true
            },
            {
                name: 'Classic Whey + Kiwi',
                ingredients: ['1 scoop whey protein', '200ml water', '1 kiwi (peeled)', '6 Collagen tablets'],
                steps: [
                    'Shake whey with water. Take collagen tablets.',
                    'Eat the kiwi on the side.'
                ],
                macros: { protein: '24g', carbs: '12g', fat: '2g', calories: '~170' }
            }
        ]
    },
    {
        time: '1:00 PM', label: 'Lunch',
        instruction: 'Main meal — Protein + 1 cup COOKED Basmati Rice + veggies.',
        recipes: [
            {
                name: 'Bone Broth Basmati Bowl',
                ingredients: ['5-6 oz chicken thighs', '1 cup COOKED Basmati rice (cooked in bone broth)', '2 cups frozen mixed veggies', '2 tbsp salsa', 'Salt & Garlic'],
                steps: [
                    'Use 1 cup cooked rice (approx 50g raw).',
                    'Sauté chicken and steam mixed veggies.',
                    'Combine all in a bowl with salsa.'
                ],
                macros: { protein: '45g', carbs: '45g', fat: '12g', calories: '~480' }
            },
            {
                name: 'Mediterranean Chickpea Salad',
                ingredients: ['1 cup canned chickpeas (drained)', '4 oz grilled chicken', '½ cucumber', '1 tomato', '2 tbsp feta cheese', '5 olives', '1 tbsp olive oil', 'Lemon juice'],
                steps: [
                    'Toss chickpeas, veggies, and olives.',
                    'Top with grilled chicken and feta.',
                    'Drizzle with olive oil and lemon.'
                ],
                macros: { protein: '38g', carbs: '35g', fat: '22g', calories: '~490' },
                isFiber: true
            },
            {
                name: 'Goat Curry with Basmati',
                ingredients: ['5 oz goat meat', '1 cup COOKED Basmati rice', '1 cup bone broth', 'Onion/Tomato curry base'],
                steps: [
                    'Prepare curry as usual. Serve over 1 cup cooked rice.'
                ],
                macros: { protein: '42g', carbs: '45g', fat: '15g', calories: '~500' }
            }
        ]
    },
    {
        time: '4:00 PM', label: 'Snack',
        instruction: 'Light energy — no heavy carbs before gym.',
        recipes: [
            {
                name: 'Pumpkin Seed & Date Duo',
                ingredients: ['1 oz pumpkin seeds', '2 organic dates'],
                steps: [
                    'Eat pumpkin seeds for Magnesium/Zinc.',
                    'Eat 2 dates for quick natural energy before gym.'
                ],
                macros: { protein: '8g', carbs: '28g', fat: '14g', calories: '~260' },
                isAntioxidant: true
            },
            {
                name: 'Greek Yogurt & Almonds',
                ingredients: ['¾ cup plain Greek yogurt', '10 almonds', 'Cinnamon'],
                steps: [
                    'Combine in a bowl. Dust with cinnamon.'
                ],
                macros: { protein: '15g', carbs: '10g', fat: '10g', calories: '~190' }
            }
        ]
    },
    {
        time: '6:00 PM', label: 'GYM',
        instruction: 'Execute workout split — Reps: 15-20 for lean cutting.',
        recipes: []
    },
    {
        time: '8:30 PM', label: 'Night Salad',
        instruction: 'High fiber + lean protein. Minimal carbs for gut health.',
        recipes: [
            {
                name: 'Anti-Inflammatory Power Salad',
                ingredients: ['2 cups spinach', '½ cucumber', '1 tomato', '½ cup mushrooms', '4 oz chicken', '2 tbsp guacamole', '2 tbsp flax seeds'],
                steps: [
                    'Combine all in a large bowl. Flax + Guacamole for healthy fats.'
                ],
                macros: { protein: '32g', carbs: '15g', fat: '18g', calories: '~350' },
                isFiber: true, isAntioxidant: true
            },
            {
                name: 'Salmon & Avocado Salad',
                ingredients: ['4 oz salmon', '2 cups mixed greens', '½ avocado', '2 tbsp flax seeds', 'Lemon & Olive Oil'],
                steps: [
                    'Flake salmon over greens. Top with avocado and flax.'
                ],
                macros: { protein: '30g', carbs: '12g', fat: '26g', calories: '~400' },
                isFiber: true
            }
        ]
    },
    {
        time: '10:00 PM', label: 'Gut Protocol',
        instruction: 'Mandatory Isabgol + Magnesium for bowel movement.',
        recipes: [
            {
                name: 'Bowel Consistency Protocol',
                ingredients: ['1 tbsp Isabgol (Psyllium Husk)', '300ml water', '1 Magnesium softgel (400mg)'],
                steps: [
                    'Mix Isabgol in water and drink immediately (do not let it gel).',
                    'Take Magnesium softgel to relax muscles and aid digestion.',
                    'Sleep for 7-8 hours for optimal recovery.'
                ],
                macros: { protein: '0g', carbs: '5g fiber', fat: '0g', calories: '~20' },
                isFiber: true
            }
        ]
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

// Helper to extract numeric calories from strings like "~450"
function parseCal(calStr) {
    if (!calStr) return 0;
    return parseInt(calStr.replace(/[^\d]/g, '')) || 0;
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

// ===== MEAL PLANNER / CALORIE TRACKER =====
function parseCal(str) {
    // Extract number from strings like "~500", "~260", "~210"
    const match = str.replace(/[^\d]/g, '');
    return parseInt(match) || 0;
}

function loadMealSelections() {
    const key = `kiran_meals_${todayKey()}`;
    const saved = localStorage.getItem(key);
    if (saved) return JSON.parse(saved);
    // Default: first recipe for each slot that has recipes
    const defaults = {};
    SCHEDULE.forEach((item, i) => {
        if (item.recipes && item.recipes.length > 0) {
            defaults[i] = 0;
        }
    });
    return defaults;
}

function saveMealSelections(selections) {
    const key = `kiran_meals_${todayKey()}`;
    localStorage.setItem(key, JSON.stringify(selections));
}

function renderMealPlanner() {
    const list = document.getElementById('meal-selector-list');
    if (!list) return; // Exit if element not in DOM

    const selections = loadMealSelections();
    const profile = loadProfile();
    const bmr = calcBMR(profile.weight, profile.height, profile.age, profile.gender);
    const tdee = calcTDEE(bmr, 'active');

    // Pre-compute availability for every recipe
    const availMap = {};
    SCHEDULE.forEach((item, i) => {
        if (!item.recipes || item.recipes.length === 0) return;
        availMap[i] = item.recipes.map(r => getRecipeAvailability(r));
    });

    // Auto-select best available recipe if current selection is unavailable
    SCHEDULE.forEach((item, i) => {
        if (!availMap[i] || availMap[i].length === 0) return;
        
        // Safeguard against stale localStorage indexes
        let currentSel = selections[i] !== undefined ? selections[i] : 0;
        if (currentSel >= availMap[i].length) {
            currentSel = 0;
            selections[i] = 0;
        }

        if (!availMap[i][currentSel].canMake) {
            // Try to find one that can be made
            const betterIdx = availMap[i].findIndex(a => a.canMake);
            if (betterIdx !== -1) {
                selections[i] = betterIdx;
            }
        }
    });
    saveMealSelections(selections);

    // Calculate total calories
    let totalCal = 0;
    let totalP = 0, totalC = 0, totalF = 0;

    const slotsWithRecipes = SCHEDULE.map((item, i) => {
        if (!item.recipes || item.recipes.length === 0) return null;
        const sel = selections[i] !== undefined ? selections[i] : 0;
        const recipe = item.recipes[sel];
        const avail = availMap[i][sel];
        const cal = parseCal(recipe.macros.calories);
        totalCal += cal;
        totalP += parseInt(recipe.macros.protein) || 0;
        totalC += parseInt(recipe.macros.carbs) || 0;
        totalF += parseInt(recipe.macros.fat) || 0;
        return { schedIdx: i, item, sel, recipe, cal, avail, allAvail: availMap[i] };
    }).filter(Boolean);

    // Update totals
    const totalCalEl = document.getElementById('total-calories');
    if (totalCalEl) totalCalEl.textContent = totalCal;
    
    const calorieBarEl = document.getElementById('calorie-bar');
    if (calorieBarEl) {
        const pct = Math.min((totalCal / tdee) * 100, 100);
        calorieBarEl.style.width = `${pct}%`;
    }

    const diffCount = totalCal - Math.round(tdee);
    const vsEl = document.getElementById('calorie-vs-tdee');
    if (vsEl) {
        if (diffCount > 0) {
            vsEl.textContent = `+${diffCount} cal above TDEE (${Math.round(tdee)}) — surplus for lean bulk`;
            vsEl.style.color = '#fbbf24';
        } else if (diffCount < -250) {
            vsEl.textContent = `${diffCount} cal below TDEE (${Math.round(tdee)}) — deficit for cutting`;
            vsEl.style.color = '#38bdf8';
        } else {
            vsEl.textContent = `${diffCount} cal vs TDEE (${Math.round(tdee)}) — near maintenance`;
            vsEl.style.color = '#94a3b8';
        }
    }

    // Render selectors with availability
    list.innerHTML = slotsWithRecipes.map(s => {
        const statusIcon = s.avail.canMake ? '✓' : '⚠️';
        const statusClass = s.avail.canMake ? 'meal-available' : 'meal-missing';
        return `
        <div class="meal-selector-row ${statusClass}">
            <div class="meal-selector-info">
                <span class="meal-selector-time">${s.item.time}</span>
                <span class="meal-selector-label">${s.item.label}</span>
            </div>
            <select class="meal-selector-dropdown" data-sched="${s.schedIdx}">
                ${s.item.recipes.map((r, ri) => {
                    const a = s.allAvail[ri];
                    const prefix = a.canMake ? '✓' : `⚠ ${a.missingCount} missing`;
                    return `<option value="${ri}" ${ri === s.sel ? 'selected' : ''}>${prefix} · ${r.name} (${r.macros.calories})</option>`;
                }).join('')}
            </select>
            ${!s.avail.canMake ? `<div class="meal-missing-items">Missing: ${s.avail.missing.join(', ')}</div>` : ''}
        </div>
        `;
    }).join('');

    // Attach change handlers
    list.querySelectorAll('.meal-selector-dropdown').forEach(sel => {
        sel.addEventListener('change', () => {
            const current = loadMealSelections();
            current[sel.dataset.sched] = parseInt(sel.value);
            saveMealSelections(current);
            renderMealPlanner();
        });
    });

    // Wire up Auto-Plan button
    const btn = document.getElementById('btn-auto-plan');
    if (btn) {
        btn.onclick = () => autoPlanDay();
    }
}

function autoPlanDay() {
    const selections = {};
    
    SCHEDULE.forEach((item, i) => {
        if (!item.recipes || item.recipes.length === 0) return;
        
        // Find all recipes we CAN make
        const options = item.recipes.map((r, ri) => ({
            recipe: r,
            index: ri,
            avail: getRecipeAvailability(r)
        })).filter(o => o.avail.canMake);

        if (options.length === 0) {
            // If none available, stay at index 0 or current
            selections[i] = 0;
            return;
        }

        // Score them: Priority 1: isFiber, Priority 2: Lower Calories
        options.sort((a, b) => {
            // Fiber first
            if (a.recipe.isFiber && !b.recipe.isFiber) return -1;
            if (!a.recipe.isFiber && b.recipe.isFiber) return 1;
            
            // Then lower calories for lean cutting
            const calA = parseCal(a.recipe.macros.calories);
            const calB = parseCal(b.recipe.macros.calories);
            return calA - calB;
        });

        selections[i] = options[0].index;
    });

    saveMealSelections(selections);
    renderMealPlanner();
    
    // Smooth scroll to top to see result
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== PANTRY RENDERER =====
function loadPantryStock() {
    const saved = localStorage.getItem('kiran_pantry_stock');
    if (saved) return JSON.parse(saved);
    // Initialize from PANTRY defaults
    const stock = {};
    PANTRY.forEach((item, i) => { stock[i] = item.inStock; });
    return stock;
}

function savePantryStock(stock) {
    localStorage.setItem('kiran_pantry_stock', JSON.stringify(stock));
}

function renderPantry() {
    const grid = document.getElementById('pantry-grid');
    const stock = loadPantryStock();

    // Group by category
    const groups = {};
    PANTRY.forEach((item, i) => {
        if (!groups[item.category]) groups[item.category] = [];
        groups[item.category].push({ ...item, idx: i, inStock: stock[i] !== false });
    });

    const order = ['protein', 'carbs', 'fat', 'veggie', 'fruit', 'dairy', 'spice', 'supplement', 'other'];

    grid.innerHTML = order.filter(cat => groups[cat]).map(cat => {
        const cfg = PANTRY_CATEGORIES[cat];
        const items = groups[cat];
        const inStockCount = items.filter(i => i.inStock).length;
        return `
            <div class="pantry-category glass-card">
                <div class="pantry-cat-header">
                    <div>
                        <span class="pantry-cat-icon">${cfg.icon}</span>
                        <span class="pantry-cat-label">${cfg.label}</span>
                    </div>
                    <span class="pantry-cat-count" style="color:${cfg.color}">${inStockCount}/${items.length}</span>
                </div>
                <div class="pantry-items">
                    ${items.map(item => `
                        <button class="pantry-item ${item.inStock ? 'in-stock' : 'out-of-stock'}" data-idx="${item.idx}">
                            <span class="pantry-item-status">${item.inStock ? '✓' : '✕'}</span>
                            <span class="pantry-item-name">${item.name}</span>
                            ${item.notes ? `<span class="pantry-item-note">${item.notes}</span>` : ''}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');

    // Click handlers — toggle stock and re-render meal planner
    grid.querySelectorAll('.pantry-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.idx);
            const current = loadPantryStock();
            current[idx] = !current[idx];
            savePantryStock(current);
            renderPantry();
            renderMealPlanner(); // Re-check recipe availability
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
    renderMealPlanner();
    renderSchedule();
    renderWorkouts();
    renderSodium();
    renderNutritionMacros();
    renderPantry();
});

