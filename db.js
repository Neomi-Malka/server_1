const books = [
    {
        code: "101",
        name: "מבוא למערכות הפעלה",
        category: "מדעי המחשב",
        price: 120,
        isBorrowed: false,
        borrows: []
    },
    {
        code: "102",
        name: "אלגוריתמים ומבני נתונים",
        category: "מדעי המחשב",
        price: 150,
        isBorrowed: true,
        borrows: [
            { borrowDate: "2026-07-01", returnDate: null }
        ]
    },
    {
        code: "103",
        name: "חשבון אינפיניטסימלי 1",
        category: "מתמטיקה",
        price: 135,
        isBorrowed: false,
        borrows: []
    }
];

export { books };