package palestra.demopalestra.repository;


import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import palestra.demopalestra.model.WorkoutLogDetails;



public interface WorkoutLogDetailsRepository extends JpaRepository<WorkoutLogDetails,Long> {

    @Query("SELECT wld FROM WorkoutLogDetails wld JOIN FETCH wld.workoutLog wl WHERE wl.workoutLogId = :workoutLogId")
    List<WorkoutLogDetails> findByWorkoutLogId(@Param("workoutLogId") Long workoutLogId);



}
