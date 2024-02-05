import React from "react";
import RecipeRecommendation from "./RecipeRecommendation";

export default function NutritionRecommendation(props) {
  if (props.bmiClass === "Underweight") {
    return (
      <div className="nutrition-recommendation">
        <h1>Recommendations:</h1>
        <ul>
          <li>
            <span>Consult with a Healthcare Professional:</span> Before making
            any significant changes to your diet or lifestyle, it's important to
            consult with a healthcare professional or a registered dietitian.
            They can provide personalized recommendations based on your specific
            health needs and goals.
          </li>

          <li>
            <span>Focus on Nutrient-Dense Foods:</span> Aim to include
            nutrient-dense foods in your diet that provide a good balance of
            macronutrients (carbohydrates, proteins, and fats) as well as
            micronutrients (vitamins and minerals). Examples include lean
            proteins, whole grains, fruits, vegetables, nuts, seeds, and healthy
            fats like avocados and olive oil.
          </li>

          <li>
            <span>Increase Caloric Intake:</span> To gain weight, you'll likely
            need to consume more calories than you expend. Focus on eating
            slightly larger portions during meals and incorporating healthy
            snacks between meals to increase your overall calorie intake.
          </li>

          <li>
            <span>Choose Healthy Snacks:</span> Opt for nutrient-rich snacks
            such as nuts, seeds, yogurt, cheese, fruits, and vegetables. These
            snacks can help boost your calorie intake while providing essential
            nutrients.
          </li>

          <li>
            <span>Include Protein-rich Foods:</span> Protein is essential for
            building and repairing tissues in the body, including muscle tissue.
            Include protein-rich foods such as poultry, fish, lean meats, eggs,
            dairy products, legumes, and tofu in your diet.
          </li>

          <li>
            <span>Consider Liquid Calories:</span> Drinking calorie-dense
            beverages such as smoothies, shakes, and homemade protein drinks can
            be an easy way to increase your calorie intake, especially if you
            have a small appetite or struggle to eat large meals.
          </li>

          <li>
            <span>Be Consistent:</span> Consistency is key when it comes to
            gaining weight in a healthy manner. Aim to eat regular meals and
            snacks throughout the day to ensure you're consistently providing
            your body with the nutrients and calories it needs.
          </li>

          <li>
            <span>Exercise Regularly:</span> While cardiovascular exercise is
            important for overall health, incorporating strength training
            exercises into your routine can help build muscle mass and increase
            overall body weight. Consult with a fitness professional to create a
            safe and effective exercise program.
          </li>
        </ul>
        <RecipeRecommendation bmiClass={props.bmiClass} />
      </div>
    );
  }
  if (props.bmiClass === "Normal") {
    return (
      <div className="nutrition-recommendation">
        <h1>Recommendations:</h1>
        <ul>
          <li>
            <span>Balanced Diet:</span> Focus on consuming a balanced diet that
            includes a variety of nutrient-dense foods such as fruits,
            vegetables, whole grains, lean proteins, and healthy fats. Aim to
            include a diverse range of foods to ensure you're getting a wide
            array of vitamins, minerals, and other essential nutrients.
          </li>

          <li>
            <span>Portion Control:</span> Pay attention to portion sizes to
            avoid overeating. Be mindful of portion sizes when dining out or
            preparing meals at home, and listen to your body's hunger and
            fullness cues.
          </li>

          <li>
            <span>Stay Active:</span> Engage in regular physical activity to
            maintain cardiovascular health, muscle strength, and overall
            fitness. Aim for at least 150 minutes of moderate-intensity aerobic
            activity or 75 minutes of vigorous-intensity aerobic activity per
            week, along with muscle-strengthening activities on two or more days
            per week.
          </li>

          <li>
            <span>Stay Hydrated:</span> Drink plenty of water throughout the day
            to stay hydrated and support bodily functions. Water is essential
            for digestion, circulation, temperature regulation, and overall
            health.
          </li>

          <li>
            <span>Manage Stress:</span> Practice stress management techniques
            such as mindfulness, meditation, deep breathing exercises, or
            engaging in hobbies and activities that you enjoy. Chronic stress
            can have negative effects on both physical and mental health.
          </li>

          <li>
            <span>Prioritize Sleep:</span> Aim for 7-9 hours of quality sleep
            per night to support overall health and well-being. Adequate sleep
            is essential for cognitive function, mood regulation, immune
            function, and maintaining a healthy weight.
          </li>

          <li>
            <span>Limit Alcohol and Tobacco:</span> If you drink alcohol, do so
            in moderation, and avoid smoking or using tobacco products. Both
            alcohol and tobacco can have detrimental effects on health when
            consumed excessively.
          </li>

          <li>
            <span>Regular Check-Ups:</span> Schedule regular check-ups with your
            healthcare provider for preventive screenings, vaccinations, and
            health assessments. Regular medical exams can help detect any
            potential health issues early on and allow for prompt treatment and
            intervention if needed.
          </li>

          <li>
            <span>Practice Self-Care:</span> Take time for self-care activities
            that promote relaxation, enjoyment, and overall well-being. This
            could include spending time with loved ones, engaging in hobbies,
            pursuing personal interests, or simply taking time to unwind and
            recharge.
          </li>

          <li>
            <span>Stay Informed:</span> Stay informed about health-related
            topics and make informed decisions about your health and lifestyle
            choices. Be wary of misinformation and seek out credible sources of
            information from healthcare professionals and reputable
            organizations.
          </li>
        </ul>
        <RecipeRecommendation bmiClass={props.bmiClass} />
      </div>
    );
  }
  if (props.bmiClass === "Overweight") {
    return (
      <div className="nutrition-recommendation">
        <h1>Recommendations:</h1>
        <ul>
          <li>
            <span>Consult with a Healthcare Professional:</span> Before making
            any significant changes to your diet or lifestyle, it's important to
            consult with a healthcare professional or a registered dietitian.
            They can provide personalized recommendations based on your specific
            health needs and goals.
          </li>

          <li>
            <span>Focus on Balanced Nutrition:</span> Aim to consume a balanced
            diet that includes a variety of nutrient-dense foods such as fruits,
            vegetables, whole grains, lean proteins, and healthy fats. Try to
            limit your intake of processed foods, sugary snacks, and beverages
            high in added sugars.
          </li>

          <li>
            <span>Practice Portion Control:</span> Pay attention to portion
            sizes and be mindful of how much you're eating during meals and
            snacks. Using smaller plates, bowls, and utensils can help you
            control portion sizes and prevent overeating.
          </li>

          <li>
            <span>Increase Physical Activity:</span>Incorporating regular
            physical activity into your daily routine can help you burn
            calories, improve cardiovascular health, and maintain muscle mass.
            Aim for at least 150 minutes of moderate-intensity aerobic activity
            or 75 minutes of vigorous-intensity aerobic activity per week, along
            with muscle-strengthening activities on two or more days per week.
          </li>

          <li>
            <span>Set Realistic Goals:</span> Set achievable goals for weight
            loss and focus on making gradual, sustainable changes to your
            lifestyle rather than seeking quick fixes or extreme measures. Aim
            for a gradual and steady weight loss of 1-2 pounds per week, which
            is considered safe and sustainable.
          </li>

          <li>
            <span>Stay Hydrated:</span> Drink plenty of water throughout the day
            to stay hydrated and support overall health. Sometimes thirst can be
            mistaken for hunger, so staying hydrated may help prevent
            unnecessary snacking or overeating.
          </li>

          <li>
            <span>Practice Mindful Eating: </span> Pay attention to your body's
            hunger and fullness cues, and try to eat mindfully without
            distractions such as television or smartphones. Chew your food
            slowly and savor each bite, which can help you feel more satisfied
            and prevent overeating.
          </li>

          <li>
            <span>Seek Support:</span> Consider joining a support group, working
            with a registered dietitian, or enlisting the support of friends and
            family members who can help encourage and motivate you on your
            weight loss journey.
          </li>
        </ul>
        <RecipeRecommendation bmiClass={props.bmiClass} />
      </div>
    );
  }
  if (props.bmiClass === "Obese Class 1") {
    return (
      <div className="nutrition-recommendation">
        <h1>Recommendations:</h1>
        <ul>
          <li>
            <span>Consult with a Healthcare Professional:</span> Before making
            any significant changes to your diet or lifestyle, it's important to
            consult with a healthcare professional or a registered dietitian.
            They can provide personalized recommendations based on your specific
            health needs and goals.
          </li>

          <li>
            <span>Focus on Balanced Nutrition:</span> Emphasize a balanced diet
            that includes a variety of nutrient-rich foods such as fruits,
            vegetables, whole grains, lean proteins, and healthy fats. Minimize
            the consumption of processed foods, sugary snacks, and beverages
            high in added sugars and unhealthy fats.
          </li>

          <li>
            <span>Portion Control:</span> Be mindful of portion sizes and avoid
            oversized servings. Using smaller plates and utensils can help
            control portions and prevent overeating.
          </li>

          <li>
            <span>Monitor Caloric Intake:</span> Keep track of your daily
            calorie intake and aim for a modest calorie deficit to promote
            gradual and sustainable weight loss. A reduction of 500 to 750
            calories per day can result in a weight loss of about 1 to 1.5
            pounds per week.
          </li>

          <li>
            <span>Incorporate Physical Activity:</span> Engage in regular
            physical activity to help burn calories, improve cardiovascular
            health, and increase metabolism. Aim for at least 150 minutes of
            moderate-intensity aerobic exercise or 75 minutes of
            vigorous-intensity aerobic exercise per week, along with strength
            training exercises to build muscle mass and enhance metabolism.
          </li>

          <li>
            <span>Set Realistic Goals:</span> Establish achievable weight loss
            goals and focus on making gradual lifestyle changes rather than
            seeking rapid results. Aim for long-term success by adopting
            sustainable habits that promote overall health and well-being.
          </li>

          <li>
            <span>Practice Self-Care:</span> Prioritize self-care practices such
            as stress management, adequate sleep, and relaxation techniques.
            Chronic stress and insufficient sleep can contribute to weight gain
            and undermine weight loss efforts.
          </li>

          <li>
            <span>Seek Social Support:</span> Surround yourself with supportive
            friends, family members, or support groups who can offer
            encouragement, accountability, and motivation throughout your weight
            loss journey.
          </li>
          <li>
            <span>Regular Monitoring and Adjustments:</span> Regularly monitor
            your progress, track changes in weight, and adjust your dietary and
            exercise routines as needed. Celebrate achievements and learn from
            setbacks to stay motivated and focused on your goals.
          </li>
          <li>
            <span>Consider Professional Support:</span> In some cases,
            individuals may benefit from additional support such as behavioral
            therapy, weight management programs, or medical interventions.
            Discuss potential options with your healthcare provider to determine
            the most appropriate course of action.
          </li>
        </ul>
        <RecipeRecommendation bmiClass={props.bmiClass} />
      </div>
    );
  }
  if (props.bmiClass === "Obese Class 2") {
    return (
      <div className="nutrition-recommendation">
        <h1>Recommendations:</h1>
        <ul>
          <li>
            <span>Medical Evaluation:</span> Due to the increased health risks
            associated with obesity class 2, it's essential to undergo a
            thorough medical evaluation by a healthcare professional. This
            evaluation can help identify any underlying health conditions and
            assess cardiovascular risk factors.
          </li>
          <li>
            <span>Comprehensive Weight Management Plan:</span> Work with a
            healthcare provider, preferably a registered dietitian or obesity
            specialist, to develop a personalized weight management plan
            tailored to your specific needs, preferences, and health goals.
          </li>
          <li>
            <span>Healthy Eating Habits:</span> Focus on adopting a balanced and
            nutritious diet that emphasizes whole foods such as fruits,
            vegetables, lean proteins, whole grains, and healthy fats. Limit the
            intake of processed foods, sugary beverages, and high-calorie
            snacks.
          </li>
          <li>
            <span>Portion Control:</span> Pay attention to portion sizes and
            practice mindful eating to avoid overeating. Using smaller plates
            and utensils can help control portion sizes and prevent excess
            calorie consumption.
          </li>
          <li>
            <span>Caloric Deficit:</span> Aim to create a modest caloric deficit
            through a combination of dietary changes and increased physical
            activity to promote weight loss. Gradual weight loss of 1-2 pounds
            per week is generally considered safe and sustainable.
          </li>
          <li>
            <span>Regular Physical Activity:</span> Incorporate regular physical
            activity into your routine to help burn calories, improve
            cardiovascular health, and enhance overall fitness. Aim for at least
            150 minutes of moderate-intensity aerobic exercise or 75 minutes of
            vigorous-intensity aerobic exercise per week, along with strength
            training exercises for muscle strengthening.
          </li>
          <li>
            <span>Behavioral Changes:</span> Address underlying behaviors and
            habits that contribute to overeating or sedentary lifestyle
            patterns. Implement strategies such as setting realistic goals,
            identifying triggers for unhealthy behaviors, and developing coping
            mechanisms to manage stress and emotions without resorting to food.
          </li>
          <li>
            <span>Social Support:</span> Seek support from friends, family
            members, or support groups who can provide encouragement,
            accountability, and motivation throughout your weight loss journey.
            Surrounding yourself with a supportive environment can help you stay
            committed to your goals.
          </li>
          <li>
            <span>Monitor Progress and Adjustments:</span> Regularly monitor
            your progress, track changes in weight, and adjust your dietary and
            exercise strategies as needed. Be flexible and willing to make
            modifications to your plan based on feedback and outcomes.
          </li>
          <li>
            <span>Long-Term Maintenance:</span> Focus on long-term lifestyle
            changes rather than short-term solutions. Develop sustainable habits
            that promote weight maintenance, including regular physical
            activity, mindful eating, and ongoing self-monitoring of behaviors
            and progress.
          </li>
        </ul>
        <RecipeRecommendation bmiClass={props.bmiClass} />
      </div>
    );
  }
  if (props.bmiClass === "Morbid Obesity") {
    return (
      <div className="nutrition-recommendation">
        <h1>Recommendations:</h1>
        <ul>
          <li>
            <span>Medical Evaluation and Monitoring:</span> Due to the
            significant health risks associated with morbid obesity, it's
            essential to undergo thorough medical evaluation and monitoring by
            healthcare professionals, including physicians, registered
            dietitians, and specialists in obesity medicine.
          </li>
          <li>
            <span>Multidisciplinary Approach:</span> Collaborate with a
            multidisciplinary healthcare team to develop a comprehensive and
            personalized weight management plan. This team may include
            healthcare providers such as physicians, dietitians, psychologists,
            exercise physiologists, and bariatric surgeons, depending on
            individual needs and goals.
          </li>
          <li>
            <span>Nutrition Therapy:</span> Work with a registered dietitian to
            develop a customized nutrition plan that emphasizes balanced and
            portion-controlled meals, incorporates nutrient-dense foods, and
            addresses individual dietary preferences and cultural
            considerations.
          </li>
          <li>
            <span>Behavioral Therapy:</span> Participate in behavioral therapy
            or counseling to address underlying psychological factors, emotional
            eating patterns, and behavioral barriers to weight management.
            Cognitive-behavioral therapy (CBT), mindfulness-based interventions,
            and motivational interviewing techniques can help foster sustainable
            behavior change.
          </li>
          <li>
            <span>Physical Activity:</span> Gradually increase physical activity
            levels under the guidance of healthcare professionals to improve
            cardiovascular health, enhance mobility, and promote weight loss.
            Incorporate a variety of enjoyable and accessible activities, such
            as walking, swimming, cycling, strength training, and low-impact
            exercises.
          </li>
          <li>
            <span>Medical Intervention:</span> Explore medical interventions,
            such as pharmacotherapy or prescription medications, under the
            supervision of a healthcare provider, to assist with weight loss
            efforts and manage obesity-related comorbidities. These medications
            may be prescribed based on individual medical history, risk factors,
            and treatment goals.
          </li>
          <li>
            <span>Bariatric Surgery:</span> Consider bariatric surgery as a
            treatment option for individuals with morbid obesity who have not
            achieved sufficient weight loss through lifestyle modifications and
            medical interventions alone. Bariatric procedures, such as gastric
            bypass, sleeve gastrectomy, and adjustable gastric banding, can lead
            to significant and sustained weight loss, as well as improvements in
            obesity-related health conditions.
          </li>
          <li>
            <span>Long-Term Support and Follow-Up:</span> Engage in long-term
            support and follow-up care to monitor progress, address challenges,
            and sustain weight loss outcomes over time. Regular medical
            check-ups, nutritional counseling, behavioral support, and support
            groups can provide ongoing guidance and encouragement.
          </li>
          <li>
            <span>Lifestyle Modification:</span> Adopt healthy lifestyle habits
            that promote overall well-being, including adequate sleep, stress
            management techniques, smoking cessation, and avoidance of excessive
            alcohol consumption.
          </li>
          <li>
            <span>Cultivate a Supportive Environment:</span> Surround yourself
            with a supportive network of family members, friends, healthcare
            providers, and peers who understand and respect your journey toward
            better health. Seek out community resources, online forums, and
            support groups for additional encouragement and shared experiences.
          </li>
        </ul>
        <RecipeRecommendation bmiClass={props.bmiClass} />
      </div>
    );
  }
}
