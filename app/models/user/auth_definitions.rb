module User::AuthDefinitions
  extend ActiveSupport::Concern
  
   included do

    # Include default devise modules. Others available are:
    # :token_authenticatable, :confirmable,
    # :lockable, :timeoutable and :omniauthable, :confirmable
    devise :database_authenticatable, :registerable,
           :recoverable, :rememberable, :trackable, :validatable, :omniauthable

    ## Database authenticatable
    field :email,              :type => String, :default => ""
    field :encrypted_password, :type => String, :default => ""
    
    ## Recoverable
    field :reset_password_token,   :type => String
    field :reset_password_sent_at, :type => Time

    ## Rememberable
    field :remember_created_at, :type => Time

    ## Trackable
    field :sign_in_count,      :type => Integer, :default => 0
    field :current_sign_in_at, :type => Time
    field :last_sign_in_at,    :type => Time
    field :current_sign_in_ip, :type => String
    field :last_sign_in_ip,    :type => String

    ## Confirmable
    field :confirmation_token,   :type => String
    field :confirmed_at,         :type => Time
    field :confirmation_sent_at, :type => Time
    field :unconfirmed_email,    :type => String # Only if using reconfirmable

    ## Lockable
    # field :failed_attempts, :type => Integer, :default => 0 # Only if lock strategy is :failed_attempts
    # field :unlock_token,    :type => String # Only if unlock strategy is :email or :both
    # field :locked_at,       :type => Time

    ## Token authenticatable
    # field :authentication_token, :type => String

    index({ email: 1 }, { unique: true, background: true })


    # Password not required when using omniauth
    def password_required?
      super && identities.empty?
    end

    # Confirmation not required when using omniauth
    def confirmation_required?
      super && identities.empty?
    end

    def update_with_password(params, *options)
      if encrypted_password.blank?
        update_attributes(params, *options)
      else
        super
      end
    end

  end
end