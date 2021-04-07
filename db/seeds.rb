restaurants = Restaurant.create([
	{
		name: "YOMG",
		image_url: "https://b.zmtcdn.com/data/pictures/chains/4/16582624/09b66e6b8033cb5b9c6a670853554a0f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
		delivery: "14.99"
	},
	{
		name: "Subway",
		image_url: "https://b.zmtcdn.com/data/pictures/chains/4/16582624/09b66e6b8033cb5b9c6a670853554a0f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
		delivery: "8.50"
	}
])

reviews = Review.create([
	{
		name: "Jane Doe",
		description: 'Food was great',
		rating: 5,
		restaurant: restaurants.first
	},
	{
		name: "John Smith",
		description: 'Food was disgusting',
		rating: 1,
		restaurant: restaurants.first
	}
])