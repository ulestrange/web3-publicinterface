/**
 * Defines the properties for a course
 */
export class Course {
  constructor(
    public code: string,
    public name: string,
    public price: number,
    public categories: string[],
    public description: string,
    public imageURL: string) {
  }
}
