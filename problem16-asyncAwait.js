processing = async () => {
  let error = true;
  if (!error) {
    setTimeout(() => {
      console.log("Please wait while processing...");
      setTimeout(() => {
        console.log("processing completed.");
      }, 5000);
    }, 1000);
    return "Done";
  }
};

downloading = async () => {
  let error = false;
  if (!error) {
    setTimeout(() => {
      console.log("Please wait while Downloading...");
      setTimeout(() => {
        console.log("downloading completed.");
      }, 5000);
    }, 1000);
    return "Done";
  }
};

executing = async () => {
  let error = false;
  if (!error) {
    setTimeout(() => {
      console.log("Please wait while executing...");
      setTimeout(() => {
        console.log("Execution completed.");
      }, 5000);
    }, 1000);
    return "Done";
  } else {
    return false;
  }
};

init = async () => {
  try {
    const a = await processing();
    const b = await downloading();
    const c = await executing();
    console.log(a);
    console.log(b);
    console.log(c);
  } catch (ex) {
    console.log(ex);
  }
};
init();
