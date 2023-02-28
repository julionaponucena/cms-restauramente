import { IFilterService } from "../IFilterService";

export class FilterService implements IFilterService {
    execute<t>(obj:t):Partial<t>{
        return Object.entries(obj)
        .filter(([_, v]) => v != null)
        .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
    }
}