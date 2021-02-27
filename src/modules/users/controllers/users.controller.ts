import { Body, Controller, Get, Param, Post, ValidationPipe } from "@nestjs/common";
import { User } from "../../../../prisma/generated";
import { UserByIdPipe } from "../../../pipes/user-by-id.pipe";
import { CreateUserDto } from "../dto/create-user.dto";
import { UsersService } from "../services/users.service";

@Controller("users")
export class UsersController {
	constructor(private readonly userService: UsersService) {
	}

	@Get(":id")
	async getUserById(@Param("id", UserByIdPipe) id: string): Promise<User> {
		console.log(id);
		return this.userService.user({ id: String(id) });
	}

	@Post()
	async signupUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto): Promise<User> {
		return this.userService.createUser(createUserDto);
	}
}