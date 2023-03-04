package palestra.demopalestra.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import palestra.demopalestra.model.WorkoutLogs;

public interface WorkoutLogsRepository extends JpaRepository<WorkoutLogs,Long>{

}
