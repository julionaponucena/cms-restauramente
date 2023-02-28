export interface IFilterService{
    execute<t>(obj:t):Partial<t>
}