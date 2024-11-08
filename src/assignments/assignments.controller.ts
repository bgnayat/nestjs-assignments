import { Controller, Param, Get } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
    @Get('fibonacci/:n')
    getFibonacci(@Param('n') n: string): number[]{
        const num = parseInt(n);
        if (isNaN(num) || num < 0){
            throw new Error('Invalid: Enter positive number not less than 0');
            }
            return this.calculateFibonacci(num);
        }

        private calculateFibonacci(n: number): number[]{
            const fibonacci: number[] = [];
            let a = 0, b =  1;

            for (let i = 0; i < n; i++){
                fibonacci.push(a);
                const next = a + b;
                a = b;
                b = next;
            }
            return fibonacci;
        }
}
