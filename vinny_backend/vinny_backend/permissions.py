class BasePermission():

    '''
        This is the base permission class for views
    '''
    
    def has_permission(context):

        return True
    
    def has_object_permission(context, object):

        return True

class IsAuthenticated(BasePermission):

    def has_permission(context):

        # Check if user is authenticated
        if not context.user.is_authenticated:
            return False
        else:
            return True

class IsOwnerOrReadOnly(BasePermission):

    def has_object_permission(context, object):

        # Check if object's owner is the current user
        if not object.owner == context.user:
            return False
        else:
            return True