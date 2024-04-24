db.users.updateMany(
    {balance: {$gt: 0}},
    {$mul:{balance:1.055}}
)