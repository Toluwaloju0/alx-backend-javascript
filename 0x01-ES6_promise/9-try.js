export default function guardrail(mathFunction) {
  const list = [];
  try {
    const count = mathFunction();
    list.push(count);
    return list;
  } catch (error) {
    list.push(`Error: ${error.message}`);
    return list;
  } finally {
    list.push('Guardrail was processed');
  }
}
