/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, UnauthorizedException, ForbiddenException, BadRequestException, InternalServerErrorException, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CommonService } from './common.service';
import { CreateCommonDto } from './dto/create-common.dto';
import { UpdateCommonDto } from './dto/update-common.dto';

@Controller('common')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @ApiOperation({ description: "특정 정보를 생성합니다." , summary :"특정 정보를 생성합니다." })
  @ApiResponse( { status : HttpStatus.OK , description : '생성한 문자열을 리턴합니다.' , type : String } )    
  @ApiResponse( { status : HttpStatus.UNAUTHORIZED , description : 'AccessToken이 잘못된경우' , type : UnauthorizedException } )
  @ApiResponse( { status : HttpStatus.FORBIDDEN , description : '해당 요청에 권한이 없습니다.' , type : ForbiddenException } )
  @ApiResponse( { status : HttpStatus.BAD_REQUEST , description : '클라이언트 파라미터 오류' , type : BadRequestException } )
  @ApiResponse( { status : HttpStatus.INTERNAL_SERVER_ERROR , description : '서버에서 알수없는 오류발생' , type : InternalServerErrorException } )
  @HttpCode( HttpStatus.OK )
  @Post()
  create(@Body() createCommonDto: CreateCommonDto) : string{
    return this.commonService.create(createCommonDto);
  }

  @ApiOperation({ description: "전체의 정보를 요청 합니다." , summary :"전체의 정보를 요청 합니다." })
  @ApiResponse( { status : HttpStatus.OK , description : '생성한 문자열을 리턴합니다.' , type : String } )    
  @ApiResponse( { status : HttpStatus.UNAUTHORIZED , description : 'AccessToken이 잘못된경우' , type : UnauthorizedException } )
  @ApiResponse( { status : HttpStatus.FORBIDDEN , description : '해당 요청에 권한이 없습니다.' , type : ForbiddenException } )
  @ApiResponse( { status : HttpStatus.BAD_REQUEST , description : '클라이언트 파라미터 오류' , type : BadRequestException } )
  @ApiResponse( { status : HttpStatus.INTERNAL_SERVER_ERROR , description : '서버에서 알수없는 오류발생' , type : InternalServerErrorException } )
  @Get()
  findAll() : string{
    return this.commonService.findAll();
  }

  @ApiOperation({ description: "{id}의 정보를 요청 합니다." , summary :"{id}의 정보를 요청 합니다." })
  @ApiResponse( { status : HttpStatus.OK , description : '생성한 문자열을 리턴합니다.' , type : String } )    
  @ApiResponse( { status : HttpStatus.UNAUTHORIZED , description : 'AccessToken이 잘못된경우' , type : UnauthorizedException } )
  @ApiResponse( { status : HttpStatus.FORBIDDEN , description : '해당 요청에 권한이 없습니다.' , type : ForbiddenException } )
  @ApiResponse( { status : HttpStatus.BAD_REQUEST , description : '클라이언트 파라미터 오류' , type : BadRequestException } )
  @ApiResponse( { status : HttpStatus.INTERNAL_SERVER_ERROR , description : '서버에서 알수없는 오류발생' , type : InternalServerErrorException } )
  @ApiParam( { name : "id" , required : true } )
  @Get(':id')
  findOne(@Param('id') id: string) : string{
    return this.commonService.findOne(+id);
  }

  @ApiOperation({ description: "{id}의 정보를 업데이트 합니다." , summary :"{id}의 정보를 업데이트 합니다." })
  @ApiResponse( { status : HttpStatus.OK , description : '생성한 문자열을 리턴합니다.' , type : String } )    
  @ApiResponse( { status : HttpStatus.UNAUTHORIZED , description : 'AccessToken이 잘못된경우' , type : UnauthorizedException } )
  @ApiResponse( { status : HttpStatus.FORBIDDEN , description : '해당 요청에 권한이 없습니다.' , type : ForbiddenException } )
  @ApiResponse( { status : HttpStatus.BAD_REQUEST , description : '클라이언트 파라미터 오류' , type : BadRequestException } )
  @ApiResponse( { status : HttpStatus.INTERNAL_SERVER_ERROR , description : '서버에서 알수없는 오류발생' , type : InternalServerErrorException } )
  @ApiParam( { name : "id" , required : true } )
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommonDto: UpdateCommonDto) : string{
    return this.commonService.update(+id, updateCommonDto);
  }

  @ApiOperation({ description: "{id}의 정보를 삭제합니다." , summary :"{id}의 정보를 삭제합니다." })
  @ApiResponse( { status : HttpStatus.OK , description : '생성한 문자열을 리턴합니다.' , type : String } )    
  @ApiResponse( { status : HttpStatus.UNAUTHORIZED , description : 'AccessToken이 잘못된경우' , type : UnauthorizedException } )
  @ApiResponse( { status : HttpStatus.FORBIDDEN , description : '해당 요청에 권한이 없습니다.' , type : ForbiddenException } )
  @ApiResponse( { status : HttpStatus.BAD_REQUEST , description : '클라이언트 파라미터 오류' , type : BadRequestException } )
  @ApiResponse( { status : HttpStatus.INTERNAL_SERVER_ERROR , description : '서버에서 알수없는 오류발생' , type : InternalServerErrorException } )
  @ApiParam( { name : "id" , required : true } )
  @Delete(':id')
  remove(@Param('id') id: string) : string {
    return this.commonService.remove(+id);
  }
}
