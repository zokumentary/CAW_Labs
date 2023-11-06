function exf(string, int) {
  if(int <=0) return 0;
  exf(string,--int)
  console.log(string+ int)
}

exf('echo',5);
exf("JS from server", 10) ;