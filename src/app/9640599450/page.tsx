import React from "react";

const DietPlan = () => {
  return (
    <div className="bg-white text-black p-6 max-w-3xl mx-auto rounded-lg shadow-md mt-8 mb-8">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-4">🔥 Optimized Diet Plan</h1>

      {/* Current Diet Analysis */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">🛑 Your Current Diet Analysis (Before Changes)</h2>
        <p className="mt-2"><strong>Weight:</strong> 78.5 kg | <strong>Height:</strong> 173 cm</p>
        
        {/* Breakfast */}
        <div className="mt-4">
          <h3 className="font-semibold">🔹 Breakfast (4 Idlis + Chutney)</h3>
          <p>Calories: ~360 kcal | Protein: ~8g | Carbs: ~70g | Fats: ~5g</p>
        </div>

        {/* Lunch */}
        <div className="mt-4">
          <h3 className="font-semibold">🔹 Lunch (250g Raw Rice + Veg Curry + Dal)</h3>
          <p>Calories: ~950 kcal | Protein: ~25g | Carbs: ~180g | Fats: ~10g</p>
        </div>

        {/* Dinner */}
        <div className="mt-4">
          <h3 className="font-semibold">🔹 Dinner (220g Raw Rice + Veg Curry + Dal)</h3>
          <p>Calories: ~850 kcal | Protein: ~20g | Carbs: ~160g | Fats: ~8g</p>
        </div>

        {/* Total */}
        <div className="mt-4 font-bold">
          ✅ Total: 2160 kcal | 53g Protein | 410g Carbs | 23g Fat
        </div>

        <p className="text-red-500 font-semibold mt-2">🛑 Problem: High Carbs, Low Protein → Leads to belly fat & low strength</p>
      </div>

      {/* Optimized Diet Plan */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">🔥 Optimized Diet (For Fat Loss + Strength)</h2>
        
        {/* Breakfast */}
        <div className="mt-4">
          <h3 className="font-semibold">🔹 Breakfast (3 Whole Eggs + 1 Banana + 5 Almonds)</h3>
          <p>Calories: ~340 kcal | Protein: ~22g | Carbs: ~30g | Fats: ~15g</p>
        </div>

        {/* Lunch */}
        <div className="mt-4">
          <h3 className="font-semibold">🔹 Lunch (150g Raw Rice + 100g Chicken + 150g Veg Curry + 1 tbsp Ghee)</h3>
          <p>Calories: ~650 kcal | Protein: ~40g | Carbs: ~110g | Fats: ~18g</p>
        </div>

        {/* Dinner */}
        <div className="mt-4">
          <h3 className="font-semibold">🔹 Dinner (100g Raw Rice + 200g Chicken + 150g Veg + Curd 100g)</h3>
          <p>Calories: ~720 kcal | Protein: ~60g | Carbs: ~80g | Fats: ~20g</p>
        </div>

        {/* Total */}
        <div className="mt-4 font-bold">
          ✅ Total: 1710 kcal | 122g Protein | 220g Carbs | 53g Fat
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">🔹 Key Benefits of Optimized Diet</h2>
        <ul className="list-disc list-inside mt-2">
          <li>✅ <strong>Higher Protein</strong> → Increases strength, burns fat</li>
          <li>✅ <strong>Lower Carbs</strong> → Reduces belly fat</li>
          <li>✅ <strong>Balanced Fats</strong> → Supports hormones & energy</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-xl font-semibold">🔥 Summary</h2>
        <p>✔ <strong>Old Diet:</strong> 2160 kcal | 53g Protein | 410g Carbs | 23g Fat</p>
        <p>✔ <strong>New Diet:</strong> 1710 kcal | 122g Protein | 220g Carbs | 53g Fat</p>
        <p className="mt-2 text-green-500 font-bold">👉 RESULT: You’ll lose belly fat & gain strength in 4-8 weeks.</p>
      </div>

      {/* Call to Action */}
      <p className="text-center mt-6 font-semibold">
        Try this for a <span className="text-red-500">month</span> and see the difference! 💪🔥
      </p>
    </div>
  );
};

export default DietPlan;
