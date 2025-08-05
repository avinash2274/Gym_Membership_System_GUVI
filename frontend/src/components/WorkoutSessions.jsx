import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          HIIT (High-Intensity Interval Traning), Strength Training, Circuit Training, Core & Abs Session, CrossFit WOD (Workout of the Day), Bodyweight Workout, Cardio Kickboxing, Zumba / Dance Fitness, etc. 
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          F45 Training, Barry’s Bootcamp, Orangetheory Fitness, Cult Fit Bootcamp.
        </p>
        <div className="bootcamps">
          <div>
            <h4>F45 TRAINING</h4>
            <p>
              F45 offers 45-minute high-intensity group workouts combining strength and cardio. With daily-changing routines and team motivation, it's perfect for building muscle, burning fat, and boosting endurance.
            </p>
          </div>
          <div>
            <h4>BARRY'S BOOTCAMP</h4>
            <p>
              Barry’s combines treadmill cardio and floor strength training in a red-lit, high-energy environment. Each session targets specific muscle groups, promoting fat loss and total-body conditioning.
            </p>
          </div>
          <div>
            <h4>ORANGETHEORY FITNESS</h4>
            <p>
              Orangetheory uses heart-rate-based interval training with rowing, running, and weights. Its science-backed approach helps burn calories post-workout and suits all fitness levels with real-time performance tracking.
            </p>
          </div>
          <div>
            <h4>CULT FIT BOOTCAMP</h4>
            <p>
              Cult Fit Bootcamp offers energetic group workouts blending HIIT, strength, and mobility. Ideal for all levels, it provides heart tracking, progress stats, and access to yoga and recovery.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;