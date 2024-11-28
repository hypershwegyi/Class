var x = 99;
var y = x < 77;
var z = x > 99;

if (y && y) {
      console.log('True ✅ True ✅');

}

else if (y) {
    console.log('True ✅ False ❌');
}

else if (z) {
   console.log('False ❌ True ✅');

}
else {
      console.log('False ❌ False ❌');

}