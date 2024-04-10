import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FormService } from '../service/form.service';

@Controller()
export class FormController {
    constructor(private formService: FormService) {}

    /**
     * Api create form fields
     * return Forms data
     */
    @Post()
    async createForm(@Body() FieldDto: any) {
        return await this.formService.createFormAndFields(FieldDto);
    }

      /**
     * Api crete to fill form data
     * return true if success
     */

    @Post('fill-data')
    async fillForm(@Body() formDataDto: any, @Query() query: any) {
        return await this.formService.fillFormData(query.title, formDataDto);
    }

   /**
     * Api to show form data
     * return Forms data
     */    
    @Get('show-data')
    async getFormData(@Query() query: any) {
        return await this.formService.findFormData(query.title);
    }
}
