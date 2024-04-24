//Задача. Увеличить баланс всех юзеров с положительным балансом на 5.5%


db.users.updateMany(
    { balance: { $gte: 0 } },
    { $mul: { balance: 1.055 } }
)


//Задача. Вывести среднюю продолжительность по всем трекам, но учитывать только треки с продолжительностью от 5 мин (вкл.)

db.tracks.aggregate([
    { $match: { duration_secs: { $gte: 60 * 5 } } },
    { $group: { _id: null, avgDuration: { $avg: '$duration_secs' } } }
])