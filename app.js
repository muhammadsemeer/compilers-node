const { spawn, execSync } = require("child_process");

const execute = () => {
  let file = process.argv[2];
  console.log(`gcc ${file}.c -o ${file}`);
  execSync(`gcc ${file}.c -o ${file}`);
  console.log(`./${file}`);
  const exe = spawn(`./${file}`);
  let input = process.argv.slice(3, process.argv.length);
  let count = 0;
  let isInputting = false;
  exe.stdout.on("data", (data) => {
    if (count !== input.length) {
      isInputting = exe.stdin.write(input[count] + "\n");
    } else {
      exe.stdin.end();
      exe.kill();
    }
    console.log(
      `${data}${isInputting && input[count] !== undefined ? input[count] : ""}`
    );
    count !== input.length && count++;
  });
  exe.stdin.on("error", (err) => {
    exe.kill();
  });
  exe.stderr.on("data", (data) => console.log(data.toString()));
  exe.on("error", (err) => console.log(err));
  exe.on("exit", (code) => {
    console.log("Process exited with ", code);
    process.exit();
  });
};


execute();

