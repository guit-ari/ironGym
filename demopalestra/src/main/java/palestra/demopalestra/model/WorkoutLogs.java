package palestra.demopalestra.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class WorkoutLogs {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="workoutLogId")
    private Long workoutLogId;
    private String nome;
    @JsonIgnore
    @OneToMany
    private List<WorkoutLogDetails> workoutsLogDetails;
    private String descrizione;

    @ManyToMany
    private List<Workout> workouts;
    public WorkoutLogs(String nome, String descrizione) {
        this.nome = nome;
        this.descrizione = descrizione;
    }
    public boolean isPresent() {
        return false;
    }
 
  
  
  

}
