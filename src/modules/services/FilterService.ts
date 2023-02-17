export class FilterService {
    execute<t>(obj:<t>):Partial<t>{
        return Object.fromEntries(
            Object.entries(obj)
              .filter(([_, v]) => v != null)
              .map(([k, v]) => [k, v === Object(v) ? this.execute(v) : v])
          ).reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
    }
}