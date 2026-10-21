import { readFileSync } from 'node:fs';
import vm from 'node:vm';

function evalWindowScript(path) {
  const window = {};
  vm.runInNewContext(readFileSync(path, 'utf8'), { window }, { filename: path });
  return window;
}

export function loadDay(path) {
  return evalWindowScript(path).TL_DAY;
}

export function loadCurriculum(path) {
  return evalWindowScript(path).TL_CURRICULUM;
}
