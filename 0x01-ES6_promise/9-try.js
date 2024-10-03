export default function guardrail(mathFunction) {
  const list = [];
  try {
    const count = mathFunction();
    list.push(count);
  } catch (error) {
    list.push(error);
  } finally {
    list.push('Guardrail was processed');
    return list;
  }
}
