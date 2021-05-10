class Api::UsersController < ApplicationController
  def index 
    @users = User.all 
    render "/"
  end 

  def show 
    @user = User.find(params[:id])

    render :show 
  end

  def create 
    @user = User.new(user_params)

    if @user.save 
      login!(@user)
      render :show
    else  
      render json: @user.errors.full_messages, status: 422
  end 

  def update 
    @user = User.find(params[:id])
    if @user == current_user.id 
      if @user.update_attributes(user_params)
        redirect_to users_url
      else  
        render json: ["Could not update user, try again!"], status: 404
      end
    else  
      render json: ["Could not update user, try again!"], status: 404
    end
  end

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :birthdate)
  end
end