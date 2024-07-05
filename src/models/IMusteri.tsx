/**
 * DİKKAT!!!! 
 * Bu ir template tanımlar Java da ki class ile neredeyse aynı kavrama gelir ancak
 * temel olarak bir interface gibi abstract yapıyı kalıp olarak tanımlar.
 * JS de her bir file içinde ki function dışarıdan erişime açılmak isteniyor ise
 * mutaka export edilmelidir.
 */
export interface IMusteri{
    id: number,
    ad: string,
    adres: string,
    telefon: string,
    status: boolean
}