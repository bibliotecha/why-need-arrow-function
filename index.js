const obj = {
  name: "Person",
  sing() {
    console.log("a", this); // ちゃんとobjの中のプロパティとして認識される
    var hello = function () {
      console.log("b", this); // Global contextの中のプロパティとして認識される
    };
    hello();
  },
};

// thisはどこで呼ばれたかではなく(lexical scope),　何に呼ばれたかで決まる(dynamic scope)

console.log(obj.sing());
