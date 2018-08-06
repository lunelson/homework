/*
  # promise naming
do / did
get / got

    e.g.
    gotContainer = Pjax.getContainer();
    function doSomething(){}
    let didSomething = doSomething();

{

  doTransition() {

  }
}

totalProgress
outroProgress
introProgress

onStateChange
    if trans.inProgress
        trans.cancel
        if trans.introProgress > 0
            trans.Intro.reverse.then() =>
                trans.getCurrent
                trans.doIntro
        else
            trans.didOutro.then () =>
                trans.getCurrent
                trans.doIntro
    else
        trans.getCurrent
        Promise.all(didLoadContent, trans.doOutro()).then(trans.doIntro)

myTrans
    .outro // Object
        ...
    .intro // Object
        .TL // Object
            .onStart
            .onComplete
            .onProgress
            .timeBase
        .play // Function
        .reverse
        .reset
            - reset handlers
            - reset timeBase
            - reset playHead
            - cancel currPromise
        .speed(n)
        .stop
            this.currPromise.cancel()
    .currPromise // Promise
    .totalProgress // Primitive

// outroFn applies stuff to the timeline

myTrans = new Trans(outroFns = {}, introFns = {});

if (this.transitionInProgress) {
    Promise.all(this.gotContainer, this.currTrans.recover())
        .then(setCurrTrans().doIntro)
        .catch(log).done();
} else {
    this.transitionInProgress = true;
    Promise.all(this.getContainer(url), this.setCurrTrans().doOutro(el))
        .then(this.currTrans.doIntro)
        .then(() => { this.transitionInProgress = false; })
        .catch(log).done();
}

myTrans.outroFn = (el, timeline) => {}
myTrans.doOutro = (el) => {}
myTrans.introFn = (container, timeline) => {}
myTrans.doIntro = (container, el) => {}

 */

const gsap = require('gsap');

/// transition class
class Transition {
  constructor(transOutFn, transInFn) {
    this.transOutTL = new gsap.Timeline();
    this.transOutFn = transOutFn;
    this.transInTL = new gsap.Timeline();
    this.transInFn = transInFn;
  }
}

if (Pjax.transitionInProgress) {
  Pjax.cancelTransition();

}

/// transition class
class Transition {
  constructor(transOut, transIn) {
    return function(getNew) {
      let getTransOut = this.getTrans(transOut);
      let getTransIn = this.getTrans(transIn);
      return Promise
      .all([getNew, getTransOut()])
      .then(getTransIn);
    }
  }
  getTrans(trans){
    // return a function that will return a Promise
    return () => {
      return new Promise((resolve) => {
        anchor = Pjax.lastClicked;
        timeline = new gsap.Timeline();
        timeline.onComplete = resolve;
        transIn(anchor, timeline);
      });
    }
  }
}

// getURL function, using Promise
function getURL(url){
  var req = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
     req.ontimeout = () => reject(new Error('xhr: Timeout exceeded'));
     req.onreadystatechange = () => {
      if (req.readyState === 4) {
        if (req.status != 200) return reject(new Error('xhr: HTTP code is not 200'));
        resolve(req.responseText);
      }
    };
    req.open('GET', url);
    req.setRequestHeader('x-pjax', 'yes');
    req.timeout = 5000;
    req.send();
  });
}

