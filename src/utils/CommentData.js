export const commentData = [
    {
        name: "John Doe",
        text: "This is a comment",
        time: "2 hours ago",
        likes: 10,
        disLikes: 2,
        reply: [
            {
                name: "Jane Doe",
                text: "This is a reply to John Doe's comment",
                time: "1 hour ago",
                likes: 3,
                disLikes: 1,
                reply:[
                    {
                        name: "Bob",
                        text: "This is a reply to Jane Doe's comment",
                        time: "30 minutes ago",
                        likes: 1,
                        disLikes: 0,
                        reply:[
                            {
                                name: "Alice",
                                text: "This is a reply to Bob's comment",
                                time: "10 minutes ago",
                                likes: 0,
                                disLikes: 0,
                                reply:[]
                            },
                        ]
                    },
                ]
            },
            {
                name: "Alice",
                text: "This is another reply to John Doe's comment",
                time: "30 minutes ago",
                likes: 5,
                disLikes: 0,
                reply:[
                    {
                        name: "Charlie",
                        text: "This is a reply to Alice's comment",
                        time: "10 minutes ago",
                        likes: 2,
                        disLikes: 0,
                        reply:[
                            {
                                name: "David",
                                text: "This is a reply to Charlie's comment",
                                time: "5 minutes ago",
                                likes: 1,
                                disLikes: 0,
                                reply:[
                                    {
                                        name: "Eve",
                                        text: "This is a reply to David's comment",
                                        time: "1 minute ago",
                                        likes: 0,
                                        disLikes: 0,
                                        reply:[]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ],
    },
    {
        name: "Jane Smith",
        text: "This is another comment",
        time: "1 hour ago",
        likes: 5,
        disLikes: 1,
        reply: [
            {
                name: "Bob",
                text: "This is a reply to Jane Smith's comment",
                time: "45 minutes ago",
                likes: 2,
                disLikes: 0,
                reply:[
                    {
                        name: "Charlie",
                        text: "This is a reply to Bob's comment",
                        time: "20 minutes ago",
                        likes: 1,
                        disLikes: 0,
                        reply:[
                            {
                                name: "David",
                                text: "This is a reply to Charlie's comment",
                                time: "10 minutes ago",
                                likes: 0,
                                disLikes: 0,
                                reply:[]
                            },
                        ]
                    },
                ]
            },
        ],
    },
    {
        name: "Bob Johnson",
        text: "This is yet another comment",
        time: "30 minutes ago",
        likes: 2,
        disLikes: 0,
        reply: [
            {
                name: "Charlie Brown",
                text: "This is a reply to Bob Johnson's comment",
                time: "15 minutes ago",
                likes: 1,
                disLikes: 0,
                reply:[
                    {
                        name: "David Wilson",
                        text: "This is a reply to Charlie Brown's comment",
                        time: "5 minutes ago",
                        likes: 0,
                        disLikes: 0,
                        reply:[
                            {
                                name: "Eve Davis",
                                text: "This is a reply to David Wilson's comment",
                                time: "1 minute ago",
                                likes: 0,
                                disLikes: 0,
                                reply:[
                                    {
                                        name: "Frank Miller",
                                        text: "This is a reply to Eve Davis's comment",
                                        time: "Just now",
                                        likes: 0,
                                        disLikes: 0,
                                        reply:[]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ],
    },
    {
        name: "Alice Brown",
        text: "This is a different comment",
        time: "15 minutes ago",
        likes: 1,
        disLikes: 0,
        reply: [
            {
                name: "David",
                text: "This is a reply to Alice Brown's comment",
                time: "5 minutes ago",
                likes: 0,
                disLikes: 0,
                reply:[]
            },
        ],
    },
    {
        name: "Charlie Green",
        text: "This is a unique comment",
        time: "5 minutes ago",
        likes: 0,
        disLikes: 5,
        reply:[
            {
                name: "Eve",
                text: "This is a reply to Charlie Green's comment",
                time: "Just now",
                likes: 0,
                disLikes: 0,
                reply:[
                    {
                        name: "Frank",
                        text: "This is a reply to Eve's comment",
                        time: "Just now",
                        likes: 0,
                        disLikes: 0,
                        reply:[]
                    },
                ]
            },
        ]
    },
    {
        name: "David White",
        text: "This is a special comment",
        time: "1 minute ago",
        likes: 20,
        disLikes: 3,
        reply:[
            {
                name: "Eve",
                text: "This is a reply to David White's comment",
                time: "Just now",
                likes: 0,
                disLikes: 0,
                reply:[
                    {
                        name: "Frank",
                        text: "This is a reply to Eve's comment",
                        time: "Just now",
                        likes: 0,
                        disLikes: 0,
                        reply:[]
                    },
                ]
            },
        ]
    },
    {
        name: "Emily Black",
        text: "This is a rare comment",
        time: "Just now",
        likes: 7,
        disLikes: 1,
        reply:[

        ]
    },
    {
        name: "Frank Gray",
        text: "This is a common comment",
        time: "Just now",
        likes: 15,
        disLikes: 0,
        reply:[
            {
                name: "Grace",
                text: "This is a reply to Frank Gray's comment",
                time: "Just now",
                likes: 0,
                disLikes: 0,
                reply:[
                    {
                        name: "Henry",
                        text: "This is a reply to Grace's comment",
                        time: "Just now",
                        likes: 0,
                        disLikes: 0,
                        reply:[
                            {
                                name: "Ivy",
                                text: "This is a reply to Henry's comment",
                                time: "Just now",
                                likes: 0,
                                disLikes: 0,
                                reply:[]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "Grace Blue",
        text: "This is a frequent comment",
        time: "Just now",
        likes: 10,
        disLikes: 2,
        reply:[
            {
                name: "Ivy",
                text: "This is a reply to Grace Blue's comment",
                time: "Just now",
                likes: 0,
                disLikes: 0,
                reply:[
                    {
                        name: "Jack",
                        text: "This is a reply to Ivy's comment",
                        time: "Just now",
                        likes: 0,
                        disLikes: 0,
                        reply:[
                            {
                                name: "Kathy",
                                text: "This is a reply to Jack's comment",
                                time: "Just now",
                                likes: 0,
                                disLikes: 0,
                                reply:[]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "Henry Yellow",
        text: "This is a popular comment",
        time: "Just now",
        likes: 23,
        disLikes: 4,
        reply:[
            {
                name: "Ivy",
                text: "This is a reply to Henry Yellow's comment",
                time: "Just now",
                likes: 0,
                disLikes: 0,
                reply:[
                    {
                        name: "Jack",
                        text: "This is a reply to Ivy's comment",
                        time: "Just now",
                        likes: 0,
                        disLikes: 0,
                        reply:[
                            {
                                name: "Kathy",
                                text: "This is a reply to Jack's comment",
                                time: "Just now",
                                likes: 0,
                                disLikes: 0,
                                reply:[]
                            },
                        ]
                    },
                ]
            },
        ]
    },
]