void main() {
  // string interpolation
  var name = 'hoon';
  var age = 28;
  var greeting =
      "Hello everyone, my name is $name, and I'm ${age} nice to meet you!";
  print(greeting);
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
  //defining a funcion
  sayHello(name);
  plus(4, 5);
}

void sayHello(String name) {
  print("Hello $name nice to meet you");
}

num plus(num a, num b) => a + b;
