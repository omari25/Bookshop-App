const books = [

    {
      id: 1,
      title: "Unlocking Android",
      price: "KSH 450",
      pageCount: 416,
      thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
      shortDescription: "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
      status: "PUBLISH",
      authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
      categories: "Open Source"
    },
    {
      id: 2,
      title: "Android in Action, Second Edition",
      price: "KSH 900",
      pageCount: 592,
      thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
      shortDescription: "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
      status: "PUBLISH",
      authors: ["W. Frank Ableson", "Robi Sen"],
      categories: "Java"
    },
    {
      id: 3,
      title: "Zend Framework in Action",
      price: "KSH 688",
      pageCount: 432,
      thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg",
      shortDescription: "Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application.",
      status: "PUBLISH",
      authors: ["Rob Allen", "Nick Lo", "Steven Brown"],
      categories: "Web Development"
    },
    {
      id: 4,
      title: "Flex on Java",
      price: "KSH 480",
      pageCount: 265,
      thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
      shortDescription: "   A beautifully written book that is a must have for every Java Developer.       Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
      status: "PUBLISH",
      authors: ["Bernerd Allmon", "Jeremy Anderson"],
      categories: "Internet"
    },
    {
      id: 5,
      title: "Griffon in Action",
      price: "KSH 490",
      pageCount: 375,
      thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/almiray.jpg",
      shortDescription: "Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.",
      status: "PUBLISH",
      authors: ["Andres Almiray", "Danno Ferrin", "", "James Shingler"],
      categories: "Java"
    },
    {
      id: 6,
      title: "OSGi in Depth",
      price: "KSH 570",
      pageCount: 325,
      thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg",
      shortDescription: "Enterprise OSGi shows a Java developer how to develop to the OSGi Service Platform Enterprise specification, an emerging Java-based technology for developing modular enterprise applications. Enterprise OSGi addresses several shortcomings of existing enterprise platforms, such as allowing the creation of better maintainable and extensible applications, and provide a simpler, easier-to-use, light-weight solution to enterprise software development.",
      status: "PUBLISH",
      authors: ["Alexandre de Castro Alves"],
      categories: "Java"
    },
    {
      id: 7,
      title: "Flexible Rails",
      price: "KSH 610",
      pageCount: 592,
      thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong.jpg",
      shortDescription: "\"Flexible Rails created a standard to which I hold other technical books. You definitely get your money's worth.\"",
      status: "PUBLISH",
      authors: ["Peter Armstrong"],
      categories: "Web Development"
    },
    {
      id: 8,
      title: "Hello! Flex 4",
      price: "KSH 600",
      pageCount: 258,
      thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong3.jpg",
      shortDescription: "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr   a mashup that lets you follow your friends by showing their tweets on a Yahoo map.",
      status: "PUBLISH",
      authors: ["Peter Armstrong"],
      categories: "Internet"
    },
    {
      id: 9,
      title: "Coffeehouse",
      price: "KSH 750",
      pageCount: 316,
      thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/asher.jpg",
      shortDescription: "Coffeehouse is an anthology of stories, poems and essays originally published on the World Wide Web.",
      status: "PUBLISH",
      authors: ["Levi Asher", "Christian Crumlish"],
      categories: "Miscellaneous"
    },
    {
      id: 10,
      title: "Brownfield Application Development in .NET",
      price: "KSH 350",
      pageCount: 550,
      thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/baley.jpg",
      shortDescription: "Brownfield Application Development in .Net shows you how to approach legacy applications with the state-of-the-art concepts, patterns, and tools you've learned to apply to new projects. Using an existing application as an example, this book guides you in applying the techniques and best practices you need to make it more maintainable and receptive to change.",
      status: "PUBLISH",
      authors: ["Kyle Baley", "Donald Belcham"],
      categories: "Microsoft"
    },
    {
      id: 11,
      title: "MongoDB in Action",
      price: "KSH 550",
      pageCount: 0,
      thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker.jpg",
      shortDescription: "MongoDB In Action is a comprehensive guide to MongoDB for application developers. The book begins by explaining what makes MongoDB unique and describing its ideal use cases. A series of tutorials designed for MongoDB mastery then leads into detailed examples for leveraging MongoDB in e-commerce, social networking, analytics, and other common applications.",
      status: "PUBLISH",
      authors: ["Kyle Banker"],
      categories: "Next Generation Databases"
    },
    {
      id: 12,
      title: "Jaguar Development with PowerBuilder 7",
      price: "KSH 500",
      pageCount: 550,
      thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rosen.jpg",
      shortDescription: "Jaguar Development with PowerBuilder 7 is the definitive guide to distributed application development with PowerBuilder. It is the only book dedicated to preparing PowerBuilder developers for Jaguar applications and has been approved by Sybase engineers and product specialists who build the tools described in the book.",
      status: "PUBLISH",
      authors: ["Michael Barlotta"],
      categories: "PowerBuilder"
    },

]

export default books