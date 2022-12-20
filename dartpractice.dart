void main() {
  // string interpolation
  /*var name = 'hoon';
  var age = 28;
  var greeting =
      "Hello everyone, my name is $name, and I'm ${age} nice to meet you!";
  print(greeting);*/
  // collection for
  var oldFriends = ['nico', 'lynn'];
  var newFriends = [
    'lewis',
    'ralph',
    'darren',
    for (var friend in oldFriends) "Heart $friend",
  ];
  print(newFriends);
  //maps
  var player = {
    'name': 'nico',
    'xp': 19.99,
    'superpower': false,
  };
  //sets
  Set<int> numbers = {1, 2, 3, 4};
  numbers.add(1);
  numbers.add(1);
  numbers.add(1);
  numbers.add(1);
  print(numbers);
  //named parameters
  print(sayHello(
    age: 12,
    country: 'cuba',
    name: 'hoon',
  ));
  var res = sahello('nico', 12);
  print(res);
}

//defining function
String sayHello({
  required String name,
  required int age,
  required String country,
}) {
  return "Hello $name, you are $age, and you come from $country";
}

// optional position parameters
String sahello(String name, int age, [String? country = 'cuba']) =>
    'hello $name, you are $age years old from $country';
