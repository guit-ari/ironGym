package palestra.demopalestra.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="workoutId")
    private Long workoutId;

    private String nome;

    @OneToOne
    private WorkoutCategory categorie;

    @OneToOne
    private MusclesGroups gruppoMuscolare;

    private int difficoltà;

   

    public Workout(String nome, WorkoutCategory categorie, MusclesGroups gruppoMuscolare, int difficoltà) {
        this.nome = nome;
        this.categorie = categorie;
        this.gruppoMuscolare = gruppoMuscolare;
        this.difficoltà = difficoltà;
    }

}
