{
  entities: {
    prints: {
      1: {
        id: 1,
          title: "Brass ring",
          body: "Pendant or towel holder depending on scale",
          image_url: "https://scontent-lga3-1.cdninstagram.com/vp/3079f8dc54494a9b038e63384acb3609/5E3B8004/t51.2885-15/e35/40567045_661922534177803_6016863457091449197_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=107",
          author_id: 11,
      },
      2: {
        id: 2,
          title: "Prop armor",
            body: "Sheet metal inspired armor with airbrushed sample image",
              image_url: "https://scontent-lga3-1.cdninstagram.com/vp/b74cfe4d92148188a5f2d067c5c2dee4/5E24B297/t51.2885-15/e35/70804064_146853219885615_1115297967485508245_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=103",
                author_id: 11,
      },
      3: {
        id: 3,
          title: "Robotic mount mechanism",
            body: "Decoupled mounting mechanism, scaled",
              image_url: "https://scontent-lga3-1.cdninstagram.com/vp/26b9188e5dc82a953bc622b9e3be5bd2/5E2B6465/t51.2885-15/e35/46978232_209267516644830_5236362050103849695_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=106",
                author_id: 11,
      }
    }
    collections: {
      1: {
        id: 1,
          title: "Accessories",
            image_url: "https://scontent-lga3-1.cdninstagram.com/vp/3079f8dc54494a9b038e63384acb3609/5E3B8004/t51.2885-15/e35/40567045_661922534177803_6016863457091449197_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=107",
              author_id: 11,
      },
      2: {
        id: 3,
          title: "Mechanisms",
            image_url: "https://scontent-lga3-1.cdninstagram.com/vp/26b9188e5dc82a953bc622b9e3be5bd2/5E2B6465/t51.2885-15/e35/46978232_209267516644830_5236362050103849695_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=106",
              author_id: 11,
      }
    }
    users: {
      11: {
        id: 11,
          username: "Jama",
          bio: '',
          avatar: '',
          designs: [1, 3],
          liked_prints: [3, 4],
          collection_ids: [1, 2],      
      },
      25: {
        id: 25,
          username: "Maker_Mike",
          author_id: [2],
          collection_ids: [1, 2], 
      }
    }
    Likes: {
      10: {
        user_id: 11,
          print_id: 1,
      },
      11: {
        user_id: 25,
          print_id: 1,
      },
      12: {
        user_id: 25,
          print_id: 3,
      },
    }
  }
  ui: {
    loading: true / false
  }
  errors: {
    login: ["Incorrect username/password combination"],
      printForm: ["Print title cannot be blank"],
  }
  session: { currentUserId: 25 }
}
