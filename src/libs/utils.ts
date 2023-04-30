export function formatDate(input: string | number | undefined): string {
  if (!input) {
    return '';
  }
  const date = new Date(input);
  return date.toLocaleString('pt-BR', {
    day: 'numeric',
    month: '2-digit',
    year: 'numeric',
  });
}
