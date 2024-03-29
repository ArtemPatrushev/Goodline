let initialState = {
    tableData: [
        {
            "name": "Pate", 
            "id": "5c7cb77230b10ac1af33e46e", 
            "phone": "963 414-26-82", 
            "age": 14
        },
        {
            "name": "Singleton",
            "id": "5c7cb772380167091b442ef5",
            "phone": "828 490-35-90",
            "age": 36
        },
        {
            "name": "Hodge",
            "id": "5c7cb772dba4bb2b14bd72a5",
            "phone": "892 574-29-12",
            "age": 57
        },
        {
            "name": "Beard",
            "id": "5c7cb77223a560d1a06e348c",
            "phone": "960 500-39-07",
            "age": 11
        },
        {
            "name": "Camacho",
            "id": "5c7cb772c702452388c59ce0",
            "phone": "853 594-32-18",
            "age": 37
        },
        {
            "name": "Glover",
            "id": "5c7cb772109f436eb189baf3",
            "phone": "961 515-38-15",
            "age": 63
        },
        {
            "name": "Love",
            "id": "5c7cb772bd03970c87dd9759",
            "phone": "858 571-22-99",
            "age": 53
        },
        {
            "name": "Gill",
            "id": "5c7cb772da80fd5425791e91",
            "phone": "960 491-38-25",
            "age": 20
        },
        {
            "name": "Bradshaw",
            "id": "5c7cb77249a395e182449b95",
            "phone": "834 475-29-88",
            "age": 64
        },
        {
            "name": "Craft",
            "id": "5c7cb772496d9861c805a099",
            "phone": "841 523-25-83",
            "age": 51
        },
        {
            "name": "Pollard",
            "id": "5c7cb772508205dcd3c15b6f",
            "phone": "804 458-37-88",
            "age": 6
        },
        {
            "name": "Vincent",
            "id": "5c7cb77295d6d1617b4319cb",
            "phone": "909 595-31-77",
            "age": 35
        },
        {
            "name": "Downs",
            "id": "5c7cb7721a8d52768881c15d",
            "phone": "893 597-25-77",
            "age": 59
        },
        {
            "name": "Rush",
            "id": "5c7cb7723efe5defb4ecd939",
            "phone": "810 466-37-09",
            "age": 6
        },
        {
            "name": "Clay",
            "id": "5c7cb772760425a4fc2d0105",
            "phone": "815 477-21-57",
            "age": 54
        },
        {
            "name": "Herman",
            "id": "5c7cb77227b6de903f3a785b",
            "phone": "976 562-23-68",
            "age": 9
        }
    ]
};

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    };
};

export default tableReducer;
