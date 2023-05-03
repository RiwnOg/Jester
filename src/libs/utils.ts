export function formatDate(input: string | number | Date | undefined): string {
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

export function formatTime(input: string | number | Date): string {
  const date = new Date(input);
  return date.toLocaleString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}
