import * as tacoTableRepo from '../repositories/tacoTableRepository';

export async function search(term: string) {
  const results = await tacoTableRepo.search(term);

  return results;
}
