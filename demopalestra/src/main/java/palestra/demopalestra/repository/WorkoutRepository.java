package palestra.demopalestra.repository;




import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import palestra.demopalestra.model.Workout;

public interface WorkoutRepository extends JpaRepository<Workout,Long>{
     // Metodo custom per trovare tutti i workout di una determinata categoria
     @Query("SELECT w FROM Workout w JOIN w.categorie c WHERE c.categoryId = :categoryId")
     List<Workout> findByCategoryId(@Param("categoryId") Long categoryId);
     
}
