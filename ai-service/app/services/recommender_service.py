def generate_schedule(subjects, available_time, max_hours):
    schedule = {}

    for day, hours in available_time.items():
        schedule[day] = []
        study_slots = min(hours, max_hours)

        for i in range(study_slots):
            subject = subjects[i % len(subjects)]
            schedule[day].append(subject)

    return schedule
