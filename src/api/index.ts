import { PackageMeta } from '@/types/types';

export default {
  searchPackages(query: string, page: number) {
    const from = page === 1 ? 0 : page * 10;

    return fetch(`https://registry.npmjs.org/-/v1/search?text=${query}&size=10&from=${from}`)
      .then((res) => res.json())
      .then((response) => ({
        total: response.total,
        packages: response.objects.map((obj: { package: PackageMeta }) => obj.package),
      }));
  },
  getPackage(name: string) {
    return fetch(` https://api.npms.io/v2/package/${name}`)
      .then((res) => res.json());
  },
};
